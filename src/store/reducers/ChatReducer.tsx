import { FETCH_CONTACT_CHAT_LIST, FETCH_CHATS, ChatListInterface, ChatActionTypes } from '../types/ChatTypes';

interface ChatState {
  chats: ChatListInterface[]
}

const initialState: ChatState = {
  chats: []
};

export function chatReducer(state: ChatState = initialState, action: ChatActionTypes): ChatState {
  switch (action.type) {
    case FETCH_CONTACT_CHAT_LIST: {
      return {
        ...state,
        chats: action.payload
      };
    }
    case FETCH_CHATS: {
      return {
        ...state,
        chats: action.payload
      };
    }
    default:
      return state
  }
};
