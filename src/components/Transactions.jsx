import styles from './Transactions.module.css';

function Transaction({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr key={id} className={index % 2 !== 0 ? styles.odd : undefined}>
            <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
 
export default Transaction;