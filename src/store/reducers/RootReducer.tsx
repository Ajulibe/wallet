import { combineReducers } from 'redux';
import { chatReducer } from './ChatReducer';
import { transactionHistoryReducer } from './TransactionHistoryReducer'

export const rootReducer = combineReducers({
  chats: chatReducer,
  transactions: transactionHistoryReducer
});

export type RootState = ReturnType<typeof rootReducer>;