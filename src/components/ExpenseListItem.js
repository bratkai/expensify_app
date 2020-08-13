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
      symbol: 'Ft '
  }
});

// switch between locales
numeral.locale('hu');


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
   <Link className="list-item" to={`/edit/${id}`}>
     <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY' )}</span>      
     </div>
     <h3 className="list-item__data">{numeral(amount /100).format('$ 0,0[.]00')} </h3>
    </Link>
   );

export default ExpenseListItem;
