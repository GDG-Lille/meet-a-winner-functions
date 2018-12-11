import axios, {AxiosInstance} from 'axios';
import * as functions from 'firebase-functions';

class AuthentificationService {

    private httpClient: AxiosInstance;
    private bearerToken: any;

    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://api.twitter.com'
        });
    }

    public async getBearerToken(): Promise<any> {
        const apiKey = functions.config().twitter.api_key;
        const apiSecret = functions.config().twitter.api_secret;

        const basicToken = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

        if(this.bearerToken === undefined) {
            try {
                const response = await this.httpClient.post(
                    '/oauth2/token',
                    'grant_type=client_credentials',
                    {
                        headers: {
                            'Authorization': `Basic ${basicToken}`,
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        }
                    });
                this.bearerToken = response.data;
            } catch (error) {
                console.error('Unable to get a bearer token from Twitter API.', error);
            }
        }

        return this.bearerToken;
    }

}

export default new AuthentificationService();
