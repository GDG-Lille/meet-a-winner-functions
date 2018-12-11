import * as functions from 'firebase-functions';

import drawsService from '../business/services/draws.service';

export default (data, context) => {
    if(!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated', 'You must be authenticated to access this resource.');
    }

    if(data.params === undefined || data.params === null || data.params.drawId === undefined) {
        throw new functions.https.HttpsError(
            'invalid-argument', 'You must provide a valid draw ID.');
    }

    return drawsService
        .findAndShuffleAllParticipantsForTwitterDraw(data.params.drawId)
        .then(participants => {
            return { participants : participants};
        });
};
