import React from 'react'
import { useGlobalState } from '../../context/GlobalState';

const TransactionItem = ({ transaction }) => {
    const { deleteTransaction } = useGlobalState();
    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className='text-sm mr-2'>{transaction.description}</p>
            <div>
                <span className='mr-2'>${transaction.amount}</span>
                <button
                    onClick={() => {
                        deleteTransaction(transaction.id);
                    }}
                >
                    x
                </button>
            </div>
        </li>
    )
}

export { TransactionItem };