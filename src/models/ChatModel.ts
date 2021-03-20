import { UserInterface } from "../store/types/AuthTypes";
// Payment Object Interface 
export interface ReferenceInterface {
    id: string,
    amount: string,
    transactionType: "credit"|"debit",
    transactionPurpose?: string,
}
//Chat detail interface
export interface ChatDetailInterface {
    id: string,
    sender: UserInterface,
    receiver: UserInterface,
    message: string,
    date:string,
    transactionReference?: ReferenceInterface,
}
// chat/conversational list interface 
export interface ChatListInterface {
    id: string,
    user: UserInterface,
    // transactionReference?: ReferenceInterface,
    chats: ChatDetailInterface[]
}