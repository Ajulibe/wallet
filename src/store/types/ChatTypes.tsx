import { ChatListInterface } from "../../models/ChatModel";

//different chat actions
export const FETCH_CONTACT_CHAT_LIST = "FETCH_CONTACT_CHAT_LIST";
export const FETCH_CHATS = "FETCH_CHATS";

interface FetchChatListAction {
   type: typeof FETCH_CONTACT_CHAT_LIST;
   payload: ChatListInterface[];
}

interface FecthChatsAction {
   type: typeof FETCH_CHATS;
   // payload: ChatsInterface[]
   payload: ChatListInterface[];
}

export type ChatActionTypes = FetchChatListAction | FecthChatsAction;
