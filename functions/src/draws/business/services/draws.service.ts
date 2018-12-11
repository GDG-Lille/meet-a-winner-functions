import * as admin from 'firebase-admin';
import tweetsService from '../../../twitter/business/services/tweets.service';

class DrawsService {

    public findOne(drawId): Promise<any> {
        return admin.firestore()
            .collection('draws')
            .doc(drawId)
            .get()
            .then(draw => {
                if(!draw.exists) {
                    throw new Error(`Draw ${drawId} not found.`)
                }

                return draw.data()
            });
    }

    public update(draw, drawId): Promise<any> {
        return admin.firestore()
            .collection('draws')
            .doc(drawId)
            .set(draw);
    }

    public close(draw, drawId): Promise<any> {
        draw.status = 'CLOSED';
        return this.update(draw, drawId);
    }

    public async findAndShuffleAllParticipantsForTwitterDraw(drawId): Promise<any> {
        const draw = await this.findOne(drawId);
        const tweeters = await tweetsService.findAllRetweets(draw.tweetId);

        const participants = tweeters.map(tweet => {
                            return {
                              name: `${tweet.user.name} "@${tweet.user.screen_name}"`,
                              image: tweet.user.profile_image_url_https
                            };
                        });
        this.shuffleParticipants(participants);

        draw.participants = participants;
        return this.close(draw, drawId);
    }

    private shuffleParticipants(participants, turn = 3) {
        if(turn === 0) {
            return participants;
        }

        for(let idx = participants.length - 1; idx > 0; idx--) {
            const idxNew = Math.floor(Math.random() * (idx + 1));
            const tmp = participants[idx];
            participants[idx] = participants[idxNew];
            participants[idxNew] = tmp;
        }

        return this.shuffleParticipants(participants, turn - 1);
    }

}

export default new DrawsService();
