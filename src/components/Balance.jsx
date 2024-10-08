import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
    const { transactions } = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="flex justify-between items-center">
            <h3>Tu Balance :</h3>
            <h1 className="text-2xl">${total}</h1>
        </div>
    );
}

export { Balance };