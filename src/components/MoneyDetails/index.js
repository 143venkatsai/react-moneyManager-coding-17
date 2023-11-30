import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="amount-container">
      <div className="balance-card amount-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div className="amount-details">
          <p className="amount-type">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-card amount-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div className="amount-details">
          <p className="amount-type">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-card amount-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div className="amount-details">
          <p className="amount-type">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
