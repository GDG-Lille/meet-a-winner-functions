import * as functions from 'firebase-functions';

import findAllTweetsByQuery from './twitter/functions/find-all-tweets-by-query';
import findAndShuffleAllParticipantsForTwitterDraw from './draws/functions/find-and-shuffle-all-participants-twitter-draw';

exports.findAllTweetsByQuery = functions.https.onCall(findAllTweetsByQuery);
exports.findAndShuffleAllParticipantsForTwitterDraw = functions.https.onCall(findAndShuffleAllParticipantsForTwitterDraw);
