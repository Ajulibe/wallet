import AsyncStorage from "@react-native-async-storage/async-storage";

const USER = "user";
const PHONE_NUMBER = "phoneNumber";
const ATM_CARD = "PaymentCard";

class AsyncStorageUtil {
   // Phone Number
   static setPhoneNumber = async (phoneNumber: string) => {
      return await AsyncStorage.setItem(PHONE_NUMBER, phoneNumber);
   };
   static getPhoneNumber = async (): Promise<string | null> => {
      return await AsyncStorage.getItem(PHONE_NUMBER);
   };
   // User Object(Interface)
   static setUser = async (user: string) => {
      return await AsyncStorage.setItem(USER, user);
   };
   static getUser = async (): Promise<string | null> => {
      return await AsyncStorage.getItem(USER);
   };
   // ATM Card Payment List
   static setCard = async (card: string) => {
      return await AsyncStorage.setItem(ATM_CARD, card);
   };
   static getCards = async (): Promise<string | null> => {
      return await AsyncStorage.getItem(ATM_CARD);
   };
}

export default AsyncStorageUtil;
