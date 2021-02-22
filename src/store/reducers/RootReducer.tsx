import { combineReducers } from 'redux';
import { chatReducer } from './ChatReducer';
import { transactionHistoryReducer } from './TransactionHistoryReducer'
import { authReducer } from './AuthReducer'

export const rootReducer = combineReducers({
  chats: chatReducer,
  transactions: transactionHistoryReducer,
  user: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;