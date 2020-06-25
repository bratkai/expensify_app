import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// load a locale
numeral.register('locale', 'hu', {
  delimiters: {
      thousands: '.',
      decimal: ','
  },
  abbreviations: {
      thousand: 'k',
      million: 'M',
      billion: 'Mrd',
      trillion: 'Tr'
  },
  ordinal : function (number) {
      return number === 1 ? '.' : '-ik';
  },
  currency: {
      symbol: 'Ft'
  }
});

// switch between locales
numeral.locale('hu');


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount /100).format('$ 0,0[.]00')} 
      - 
      {moment(createdAt).format('MMMM Do, YYYY' )}
      </p>
  </div>
);

export default ExpenseListItem;
