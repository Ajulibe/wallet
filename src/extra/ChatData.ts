import { ChatDetailInterface, ChatListInterface ,ReferenceInterface} from "../models/ChatModel";
import { UserInterface } from "../store/types/AuthTypes";

export class ChatData{
    static senderUser:UserInterface = {
        id: '1',
        uuid: 'String',
        userType: "user|merchant",
        phoneNumber: '081688983421',
        firstName: 'John ',
        lastName: 'Babalawo',
        emailAddress: 'johny@gmal.com',
        photoUrl:'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg'
    }
    static ref:ReferenceInterface[] = [
        {
            id: '1',
            amount: '234.89',
            transactionType: "credit",
            transactionPurpose:'Shoes & Bread'
        },
        {
            id: '2',
            amount: '500.89',
            transactionType: "debit",
            transactionPurpose:'Shopping'
        }
    ]

    static chats1:ChatDetailInterface[] = [
        {
            id: '1',
            sender: ChatData.senderUser,
            receiver:ChatData.senderUser,
            message: "Hello Bos How are you doing today and how's everythig going on with you?",
            date: '12, mar 2021',
            // transactionReference: ChatData.ref,
        },
        {
            id: '2',
            sender: ChatData.senderUser,
            receiver:ChatData.senderUser,
            message: "Hello Bos How are you doing today and how's everythig going on with you?",
            date: '12, mar 2021',
            transactionReference: ChatData.ref[0],
        },
    ]


    static chats2:ChatDetailInterface[] = [
        {
            id: '2',
            sender: ChatData.senderUser,
            receiver:ChatData.senderUser,
            message: "Hello Bos How are you doing today and how's everythig going on with you?",
            date: '12, mar 2021',
            transactionReference: ChatData.ref[0],
        },
    ]
    static chats3:ChatDetailInterface[] = [
        {
            id: '3',
            sender: ChatData.senderUser,
            receiver:ChatData.senderUser,
            message: "Hello Bos How are you doing today and how's everythig going on with you?",
            date: '12, mar 2021',
            transactionReference: ChatData.ref[1],
        }
    ]



    static chatsList:ChatListInterface[] = [
        {
            id: '1',
            user: ChatData.senderUser,
            chats: ChatData.chats1
        },
        {
            id: '2',
            user: ChatData.senderUser,
            chats: ChatData.chats2
        },
        {
            id: '3',
            user: ChatData.senderUser,
            chats: ChatData.chats1
        },
        {
            id: '4',
            user: ChatData.senderUser,
            chats: ChatData.chats3
        },
        {
            id: '5',
            user: ChatData.senderUser,
            chats: ChatData.chats2
        },
        {
            id: '6',
            user: ChatData.senderUser,
            chats: ChatData.chats3
        },
        {
            id: '7',
            user: ChatData.senderUser,
            chats: ChatData.chats1
        },
        {
            id: '8',
            user: ChatData.senderUser,
            chats: ChatData.chats3
        },
        {
            id: '9',
            user: ChatData.senderUser,
            chats: ChatData.chats2
        },
        {
            id: '10',
            user: ChatData.senderUser,
            chats: ChatData.chats3
        },
        {
            id: '11',
            user: ChatData.senderUser,
            chats: ChatData.chats1
        },
    ]
}