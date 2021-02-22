import { USER_LOGIN, USER_REGISTRATION, USER_PROFILE_UPDATE, AuthActionTypes, UserInterface } from '../types/AuthTypes';
import { authService } from '../../services/AuthService';
import { request, failure } from './CommonActions';
import { Action, ActionCreator } from 'redux';
import { Dispatch } from 'react';

const userLoginSuccess: ActionCreator<AuthActionTypes> = (user: UserInterface) => {
  return { type: USER_LOGIN, payload: user };
}
const userRegisterSuccess: ActionCreator<AuthActionTypes> = (user: UserInterface) => {
  return { type: USER_REGISTRATION, payload: user };
}
const userProfileUpdateSuccess: ActionCreator<AuthActionTypes> = (user: UserInterface) => {
  return { type: USER_PROFILE_UPDATE, payload: user };
}

export function registerUser() {//to be called from sreen pahges
  return (dispatch: Dispatch<Action>) => { // async action: uses Redux-Thunk middleware to return a function instead of an action creator
    dispatch(request());
    return authService.userRegistrationRequest()
      .then(
        (response: any) => {
          dispatch(userRegisterSuccess(response))
        },
        error => {
          dispatch(failure('Server error. ' + error))
        })
  }
}


export function loginUser({ phoneNo, pin }: { phoneNo: String, pin: String }) {
  return (dispatch: any) => {
    dispatch(request());
    return authService.userLoginRequest({ phoneNo, pin })
      .then(
        response => {
          dispatch(userLoginSuccess(response))
        },
        error => {
          dispatch(failure('Server error. ' + error))
        })
  }
}