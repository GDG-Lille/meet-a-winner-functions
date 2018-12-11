import * as functions from 'firebase-functions';

import tweetsService from '../business/services/tweets.service';

export default (data, context) => {
    if(!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated', 'You must be authenticated to access this resource.');
    }

    if(data.params === undefined || data.params === null || data.params.query === undefined) {
        throw new functions.https.HttpsError(
            'invalid-argument', 'You must provide a valid query.');
    }

    return tweetsService
        .findAllByQuery(data.params.query)
        .then(tweets => {
            return { tweets : tweets };
        });
};
