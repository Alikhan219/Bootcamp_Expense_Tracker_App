import {createContext} from "react"

const initialTransactions = [
    { amount: +500, desc: "cash" },
    { amount: -40, desc: "book" },
    { amount: -400, desc: "camera" },
  ];


 export const TransactionContext= createContext(initialTransactions)