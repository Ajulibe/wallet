import { USER_LOGIN, USER_REGISTRATION, USER_PROFILE_UPDATE, AuthActionTypes, UserInterface } from '../types/AuthTypes';

interface AuthState {
  user: UserInterface
}

const initialState: AuthState = {
  user: {
    id: "123",
    phoneNo: '08185468532',
    firstName: 'Edu Odo',
    lastName: "Dumboy",
    emailAddress: 'edu@gmail.com',
    userPin: '5673'
  }
};

export function authReducer(state: AuthState = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        user: action.payload
      };
    }
    case USER_REGISTRATION: {
      return {
        ...state,
        user: action.payload
      };
    }
    case USER_PROFILE_UPDATE: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state
  }
};
