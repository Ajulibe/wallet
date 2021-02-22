// import { testData } from '../extra/testData.extra';
import { TransactionHistoryInterface } from '../store/types/TransactionHistoryTypes';

export const transactionHistoryService = {
    fetchTransactionHistory,
};

async function fetchTransactionHistory(): Promise<TransactionHistoryInterface[]> {
    return await getFromServer('/api/');
    // return testData.posts
}




//SERVICE HELPERS

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