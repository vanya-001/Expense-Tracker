import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart'
import { dollar } from '../../utils/icons';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History'

function Dashboard() {
  const {incomes, expenses, totalExpense, totalIncome, totalBalance, getIncome, getExpense} = useGlobalContext()

  useEffect(() =>{
    getIncome()
    getExpense()
  }, [])
  return (
    <DashboardStyled>
        <InnerLayout>
            <h1>All Transcations</h1>
            <div className="stats-con">
              <div className="chart-con">
                <Chart />
                <div className="amount-con">
                  <div className="income">
                    <h4>Total Income</h4>
                    <p>
                      {dollar} {totalIncome()}
                    </p>
                  </div>
                  <div className="expense">
                    <h4>Total Expense</h4>
                    <p>
                      {dollar} {totalExpense()}
                    </p>
                  </div>
                  <div className="balance">
                    <h4>Total Balance</h4>
                    <p>
                      {dollar} {totalBalance()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="history-con">
                  <History />
                  <h2 className = "salary-title">Min <span>Salary</span>Max</h2>
                  <div className="salary-item">
                    <p>
                      {Math.min(...incomes.map(item => item.amount))}
                    </p>
                    <p>
                      {Math.max(...incomes.map(item => item.amount))}
                    </p>
                  </div>
                  <h2 className = "salary-title">Min <span>Expense</span>Max</h2>
                  <div className="salary-item">
                    <p>
                      {Math.min(...expenses.map(item => item.amount))}
                    </p>
                    <p>
                      {Math.max(...expenses.map(item => item.amount))}
                    </p>
                  </div>
              </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
  .stats-con{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    width: 100%;
    .chart-con{
      grid-column: 1 / 4;
      height: 300px;
      .amount-con{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income, .expense{
          grid-column: span 2;
        }
        .income, .expense, .balance{
          background: 3FCF6F9;
          border: 2px solid #FFFFFF;
          box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
          padding: 1rem;
          border-radius: 20px;
          p{
            font-size: 2rem;
            font-weight: 600;
          }
        }
        .balance{
          grid-column: 2/4;
          display: flex;
          flex-direction: column; 
          justify-content: center;
          align-items: center;
          p{
            color: var(--color-green);
            opacity: 0.6;
            font-size: 3rem;
          }
        }
      }
    }
    
    .history-con{
      grid-column: 4 / -1;
      h2{
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-item{
        background: 3FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
      .salary-title{
        font-size: 1.2rem;
        span{
          font-size: 1.8rem;
        }
      }
    }
  }
`;
export default Dashboard