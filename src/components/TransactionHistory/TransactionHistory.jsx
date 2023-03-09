import PropTypes from 'prop-types';
import {
  TransactionHistoryy,
  Thead,
  TheadTr,
  Tbody,
  TbodyTr,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryy className="transaction-history">
      <Thead>
        <TheadTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TheadTr>
      </Thead>

      <Tbody>
        {transactions.map(transaction => (
          <TbodyTr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </TbodyTr>
        ))}
      </Tbody>
    </TransactionHistoryy>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired),
};
