import { ChatListInterface } from '../store/types/ChatTypes';

export const chatService = {
    fetchChatList,
    fetchChat
};

async function fetchChatList(): Promise<ChatListInterface[]> {
    return await getFromServer('/api/');
    // return testData.posts
}

async function fetchChat({ postId, userId }: { postId: String, userId: String }): Promise<ChatListInterface[]> {
    return await getFromServer('/api/');
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

export async function postToServer(path:string, body = {}) {
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

export async function getFromServer(path:string) {
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