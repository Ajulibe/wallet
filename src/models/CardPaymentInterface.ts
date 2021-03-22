
//ATM Card Payment Model(Interface)
export interface CardPaymentInterface {
    cardHolderName: string,
    cardNumber: string,
    cardExpiryMonth: string,
    cardExpiryYear: string,
    cardCvv: string,
    cardType?: "Mastercard"|"Visa"|"Verve",
}