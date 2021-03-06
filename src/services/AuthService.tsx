import { UserInterface } from '../store/types/AuthTypes';
import axios from 'axios';
import ServerResponse from '../models/ServerResponse';
import URLHOLDER from '../utils/UrlHolder';


const dummyUser: UserInterface = {
    id: "123",
    phoneNo: '08185468532',
    firstName: 'Edu Odo',
    lastName: "Dumboy",
    emailAddress: 'edu@gmail.com',
    userPin: '5673'
}

export class AuthService {
    /** @function Auth Functions */
    static userRegistrationRequest = (): Promise<UserInterface> => {
        // const result = await regUser('/api/');
        // return result;
        return Promise.resolve(dummyUser)
    }

    static async userLoginRequest({ phoneNo, pin }: { phoneNo: String, pin: String }): Promise<UserInterface> {
        return await this.getFromServer('/api/');
        // const posts = testData.posts
        // posts.map((post:any) => {
        //     if (post.id == postId) {
        //         if (post.likes.find((like: String) => like == userId))
        //             post.likes = post.likes.filter((like: String) => like != userId)
        //         else post.likes.push(userId)
        //     }
        // })
        // return posts
    }



    //SERVICE HELPERS
    static regUser = async (path: string, body = {}) => {
        let responseData = null
        try {
            const response = await fetch(path,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
            if (!response.ok)
                return Promise.reject(response);
            else {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    responseData = await response.json();
                } else {
                    responseData = await response.text();
                }
            }
        } catch (error) {
            return Promise.reject(error);
        }
        return responseData
    }


    static async getFromServer(path: string) {
        let responseData = null
        try {
            const response = await fetch(path);
            if (!response.ok)
                return Promise.reject(response);
            else {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    responseData = await response.json();
                } else {
                    responseData = await response.text();
                }
            }
        } catch (error) {
            return Promise.reject(error);
        }
        return responseData
    }


    //SEND OTP REQUEST
    static async sendOtp({ phoneNo }: { phoneNo: string }): Promise<ServerResponse> {
        let responseData: ServerResponse = new ServerResponse()
        await axios.get(`${URLHOLDER.SEND_OTP}/${phoneNo}`)
            .then(response => {
                responseData.status = response.data.status;
                responseData.success = response.data.success;
                responseData.message = response.data.message;
                responseData.additionalParam = response.data.data.verify_id;
            })
            .catch(error => {
                responseData.message = error.toString();
            });
        return Promise.resolve(responseData);
    }
}
