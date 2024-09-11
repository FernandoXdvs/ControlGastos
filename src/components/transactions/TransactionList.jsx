import { useGlobalState } from "../../context/GlobalState";
import { TransactionItem } from "./TransactionItem";

const TransactionList = () => {
    const { transactions } = useGlobalState();

    return (
        <>
            <h3 className="text-slate-300 text-xl font-bold block">Historial</h3>
            <ul className="w-full">
                {
                    transactions.map(transaction => (
                        <TransactionItem transaction={transaction} key={transaction.id} />
                    ))
                }
            </ul>
        </>
    );
}

export { TransactionList };