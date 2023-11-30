import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManger extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updateTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionList: updateTransactionList})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const option = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = option
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <>
        <div className="money-container">
          <div className="title-container">
            <h1 className="user-name">Hi, Richard</h1>
            <p className="comment">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="input-container">
            <form className="left-section" onSubmit={this.onAddTransaction}>
              <h2 className="section-name">Add Transaction</h2>
              <label htmlFor="title" className="label-name">
                TITLE
              </label>
              <br />
              <input
                type="text"
                value={titleInput}
                id="title"
                placeholder="TITLE"
                className="input-element"
                onChange={this.onChangeTitle}
              />
              <br />
              <label htmlFor="amount" className="label-name">
                AMOUNT
              </label>
              <br />
              <input
                type="text"
                value={amountInput}
                id="amount"
                placeholder="AMOUNT"
                className="input-element"
                onChange={this.onChangeAmount}
              />
              <br />
              <label htmlFor="select" className="label-name">
                TYPE
              </label>
              <br />
              <select
                id="select"
                className="input-element"
                onChange={this.onChangeType}
                value={optionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="right-section">
              <h2 className="section-name">History</h2>
              <div className="transaction-container">
                <p className="title-name">Title</p>
                <p className="title-name">Amount</p>
                <p className="title-name">Type</p>
              </div>
              <ul className="list-container">
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    transactionDetails={eachTransaction}
                    key={eachTransaction.id}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyManger
