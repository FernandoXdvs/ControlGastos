import { useGlobalState } from '../context/GlobalState';

const IncomeExpenses = () => {
    const { transactions } = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2) * -1;

    return (
        <>
            <div className="flex justify-between my2">
                <h4>Ingresos</h4>
                <p>{income}</p>
            </div>
            <div className="flex justify-between my2">
                <h4>Gastos</h4>
                <p>{expense}</p>
            </div>
        </>
    );
}

export { IncomeExpenses };