import React from 'react'
import styled from 'styled-components'
import {Chart as ChartJs, 
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'
import { GlobalProvider } from '../../context/globalContext'

ChartJs.register(
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGlobalContext()
    const data = {
        labels: [...incomes.map((inc) => dateFormat(inc.date))],
        datasets: [
          {
            label: 'Incomes',
            data: incomes.map((inc) => inc.amount),
            backgroundColor: 'green',
            tension: 0.2
          },
          {
            label: 'Expenses',
            data: [...expenses.map((exp) => exp.amount)],
            backgroundColor: 'red',
            tension: 0.2
          },
        ],
      };
      

  return (
    <ChartStyled>
        <Line data = {data} />
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadowing: 0px 1px 15px rgba(0,0,0,0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart
