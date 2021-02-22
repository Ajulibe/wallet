import { ImageSourcePropType } from "react-native"

export interface UserInterface {
    id?: String,
    phoneNo: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    userPin: string
}

//different operation types....
export const USER_REGISTRATION = "AUTH_REGISTRATION"
export const USER_LOGIN = "AUTH_LOGIN"
export const USER_PROFILE_UPDATE = "AUTH_UPDATE_PROFILE"

interface RegisterAction {
    type: typeof USER_REGISTRATION,
    payload: UserInterface
}

interface LoginAction {
    type: typeof USER_LOGIN,
    payload: UserInterface
}

interface UpdateProfileAction {
    type: typeof USER_PROFILE_UPDATE,
    payload: UserInterface
}

export type AuthActionTypes = RegisterAction | LoginAction | UpdateProfileAction