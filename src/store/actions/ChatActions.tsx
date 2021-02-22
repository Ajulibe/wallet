import { FETCH_CONTACT_CHAT_LIST, FETCH_CHATS, ChatActionTypes, ChatListInterface, ChatsInterface } from '../types/ChatTypes';
import { chatService } from '../../services/ChatsService';
import { request, failure } from './CommonActions';
import { Action, ActionCreator } from 'redux';
import { Dispatch } from 'react';

const fetchChatListFeedSuccess: ActionCreator<ChatActionTypes> = (chats: ChatListInterface[]) => {
  return { type: FETCH_CONTACT_CHAT_LIST, payload: chats };
}
const fetchChatSuccess: ActionCreator<ChatActionTypes> = (chats: ChatListInterface[]) => {
  return { type: FETCH_CHATS, payload: chats };
}

export function fetchChatList() {//to be called from sreen pahges
  return (dispatch: Dispatch<Action>) => { // async action: uses Redux-Thunk middleware to return a function instead of an action creator
    dispatch(request());
    return chatService.fetchChatList()
      .then(
        (response: any) => {
          dispatch(fetchChatListFeedSuccess(response))
        },
        error => {
          dispatch(failure('Server error. ' + error))
        })
  }
}


export function fetchChat({ postId, userId }: { postId: String, userId: String }) {
  return (dispatch: any) => {
    dispatch(request());
    return chatService.fetchChat({ postId, userId })
      .then(
        response => {
          dispatch(fetchChatSuccess(response))
        },
        error => {
          dispatch(failure('Server error. ' + error))
        })
  }
}