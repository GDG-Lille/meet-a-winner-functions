import axios, {AxiosInstance} from 'axios';
import authentificationService from './authentification.service';

class TweetsService {

    private httpClient: AxiosInstance;

    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://api.twitter.com/1.1'
        });
    }

    public async findAllByQuery(query): Promise<Array<any>> {
        const bearerToken = await authentificationService.getBearerToken();

        return this.httpClient
            .get(`/search/tweets.json?q=${query}`,
                {
                    headers: {
                        'Authorization': `Bearer ${bearerToken.access_token}`
                    }
                })
            .then(response => response.data.statuses);
    }

    public async findAllRetweets(tweetId): Promise<Array<any>> {
        const bearerToken = await authentificationService.getBearerToken();

        return this.httpClient
            .get(`/statuses/retweets/${tweetId}.json`,
                {
                    headers: {
                        'Authorization': `Bearer ${bearerToken.access_token}`
                    }
                })
            .then(response => response.data);
    }

}

export default new TweetsService();
