import { AUTH_TYPES, AuthActionTypes, UserInterface } from '../types/AuthTypes';
import { AuthService } from '../../services/AuthService';
import { loading, failure } from './CommonActions';
import { Action, ActionCreator } from 'redux';
import { Dispatch } from 'react';
import { AuthDetail } from '../../models/AuthDetail';


//ACTIONS
const userLoginSuccess: ActionCreator<AuthActionTypes> = (user: UserInterface) => {
  return { type: AUTH_TYPES.USER_LOGIN, payload: user };
}
const userRegisterSuccess: ActionCreator<AuthActionTypes> = (user: UserInterface) => {
  return { type: AUTH_TYPES.USER_REGISTRATION, payload: user };
}
const userProfileUpdateSuccess: ActionCreator<AuthActionTypes> = (user: UserInterface) => {
  return { type: AUTH_TYPES.USER_PROFILE_UPDATE, payload: user };
}



//ACTION FUNCTIONS
export function registerUser({ authDetail }: { authDetail: AuthDetail }) {//to be called from sreen pahges
  return (dispatch: Dispatch<Action>) => { // async action: uses Redux-Thunk middleware to return a function instead of an action creator
    dispatch(loading(true));
    return AuthService.userRegistration({ authDetail: authDetail })
      .then(
        (response: any) => {

          setTimeout(() => {
            dispatch(loading(false));
            dispatch(userRegisterSuccess(response))
          }, 3000);
        },
        error => {
          dispatch(loading(false));
          dispatch(failure('Server error. ' + error))
        })
  }
}


export function loginUser({ phoneNo, pin }: { phoneNo: String, pin: String }) {
  return (dispatch: any) => {
    dispatch(loading());
    // return AuthService.userLoginRequest({ phoneNo, pin })
    //   .then(
    //     response => {
    //       dispatch(userLoginSuccess(response))
    //     },
    //     error => {
    //       dispatch(failure('Server error. ' + error))
    //     })
  }
}