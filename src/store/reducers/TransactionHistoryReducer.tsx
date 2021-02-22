import { TransactionHistoryInterface, FETCH_RECENT_TRANSACTION, TransactionHistoryActionTypes } from "../types/TransactionHistoryTypes";

interface TransactionState {
  transaction: TransactionHistoryInterface[],
}

const initialState: TransactionState = {
  transaction: [],
};

export function transactionHistoryReducer(state: TransactionState = initialState, action: TransactionHistoryActionTypes): TransactionState {
  switch (action.type) {
    case FETCH_RECENT_TRANSACTION: {
      return {
        ...state,
        transaction: action.payload
      };
    }
    // case UPDATE_TRANSACTION: {
    //   return {
    //     ...state,
    //     transaction: action.payload
    //   };
    // }
    default:
      return state;
  }
}