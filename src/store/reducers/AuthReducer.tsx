import { AUTH_TYPES, AuthActionTypes, UserInterface } from '../types/AuthTypes';

import { GEN_ACTIONS, FetchActionTypes, } from '../types/CommonTypes'

interface AuthState {
  user: UserInterface,
  error?: string | null,
  loading?: boolean | null
}

const initialState: AuthState = {
  user: {
    id: "",
    phoneNo: '',
    firstName: '',
    lastName: "",
    emailAddress: '',
    userPin: ''
  },
  error: null,
  loading: null
};

export function authReducer(state: AuthState = initialState, action: AuthActionTypes | FetchActionTypes): AuthState {
  switch (action.type) {
    case AUTH_TYPES.USER_LOGIN: {
      return {
        ...state,
        user: action.payload, error: null
      };
    }
    case AUTH_TYPES.USER_REGISTRATION: {
      return {
        ...state,
        user: action.payload, error: null
      };
    }
    case AUTH_TYPES.USER_PROFILE_UPDATE: {
      return {
        ...state,
        user: action.payload, error: null
      };
    }
    case GEN_ACTIONS.DATA_LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case GEN_ACTIONS.ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state
  }
};
