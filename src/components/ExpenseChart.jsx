import React from 'react'
import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../context/GlobalState';

const ExpenseChart = () => {

    const { transactions } = useGlobalState();

    const total = transactions.reduce((acc, transaction) => (acc += transaction.amount), 0);


    const income = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0)
        .toFixed(2);

    const expense = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0)
        .toFixed(2) * -1;


    const totalExpensePercentaje = Math.round((expense / income) * 100);
    const totalIncomePercentaje = 100 - totalExpensePercentaje;

    return (
        <VictoryPie
            colorScale={["#e74c3c", "#2ecc71"]}
            data={[
                { x: "Gastos", y: totalExpensePercentaje },
                { x: "Ingresos", y: totalIncomePercentaje },

            ]}
            animate={{
                duration: 200
            }}
            labels={({ datum }) => `${datum.y}%`}
            labelComponent={
                <VictoryLabel
                    angle={45}
                    style={{
                        fill: "white",
                    }}
                />
            }
        />
    );
}

export { ExpenseChart };