import { FETCH_RECENT_TRANSACTION, TransactionHistoryActionTypes, TransactionHistoryInterface, TransactionTypeInterface } from '../types/TransactionHistoryTypes';
import { transactionHistoryService } from '../../services/TransactionHistoryService';
import { loading, failure } from './CommonActions';
import { ActionCreator } from 'redux';

const fetchTransactionSuccess: ActionCreator<TransactionHistoryActionTypes> = (transactions: TransactionHistoryInterface[]) => {
  return { type: FETCH_RECENT_TRANSACTION, payload: transactions };
}

export function fetchChatList() {//to be called from sreen pahges
  return (dispatch: any) => { // async action: uses Redux-Thunk middleware to return a function instead of an action creator
    dispatch(loading());
    return transactionHistoryService.fetchTransactionHistory()
      .then(
        (response: any) => {
          dispatch(fetchTransactionSuccess(response))
        },
        error => {
          dispatch(failure('Server error.'))
        })
  }
}
