import { UserInterface } from "./AuthTypes"

export interface ChatsInterface {
    id: String,
    message: string,
    date:number,
}
export interface ReferenceInterface {
    id: String,
    amount: string,
    bankName: string,
    user: UserInterface,
}
export interface ChatListInterface {
    id: String,
    sender: UserInterface,
    receiver: UserInterface,
    transactionReference: ReferenceInterface,
    chats: ChatsInterface[]
}

//different chat actions
export const FETCH_CONTACT_CHAT_LIST = "FETCH_CONTACT_CHAT_LIST"
export const FETCH_CHATS = "FETCH_CHATS"

interface FetchChatListAction {
    type: typeof FETCH_CONTACT_CHAT_LIST,
    payload: ChatListInterface[]
}

interface FecthChatsAction {
    type: typeof FETCH_CHATS,
    // payload: ChatsInterface[]
    payload: ChatListInterface[]
}


export type ChatActionTypes = FetchChatListAction | FecthChatsAction