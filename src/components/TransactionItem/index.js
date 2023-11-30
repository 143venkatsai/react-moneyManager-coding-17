import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteButton = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction">
      <p className="detail">{title}</p>
      <p className="detail">Rs {amount}</p>
      <p className="detail">{type}</p>
      <button
        type="button"
        className="delete"
        data-testid="delete"
        aria-label="Delete Transaction"
        onClick={onDeleteButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
