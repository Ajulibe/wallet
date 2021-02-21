import { UserInterface } from "./AuthTypes"

export interface TransactionTypeInterface {
    id: String,
    type: "debit|credit"
}
export interface TransactionHistoryInterface {
    id: String,
    user: UserInterface
    transactionType: TransactionTypeInterface
    amount: number
    datetime: number
    bank: string
}

//different transaction history operations
export const FETCH_RECENT_TRANSACTION = "RECENT_TRANSACTION"

interface RecentTransactionAction {
    type: typeof FETCH_RECENT_TRANSACTION,
    payload: TransactionHistoryInterface[]
}

export type TransactionHistoryActionTypes = RecentTransactionAction