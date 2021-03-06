import React from 'react';
import { connect } from 'react-redux';
import CreditCardForm from '../Checkout/CreditCardForm';
import { deleteCreditCardOnServer } from '../../store';
import UserNav from '../User/UserNav';
import { Helmet } from 'react-helmet';

const CreditCards = ({ userCards, user, deleteCard }) => {
  return (
    <div>
      {user.firstName && <Helmet><title>{user.firstName}'s Credit Cards | J²A</title></Helmet>}
      <UserNav user={ user } />
      <h2>Credit Cards</h2>
      <ul className='list-group'>
        {
          userCards.map(card => (
            <li key={card.id} className='list-group-item'>
              <p>Card Type: {card.ccType}</p>
              <p>{'****************' + card.ccNum.slice(-4)}</p>
              <p>Expiration: {card.ccExp}</p>
              <button onClick={() => deleteCard(card.id)} className='btn btn-danger'>Delete Card</button>
            </li>
          ))
        }
      </ul>
      <CreditCardForm userId={user.id} />
    </div>
  );
}

const mapState = ({ creditCards, user }) => {
  const userCards = creditCards.filter(card => card.userId === user.id)
  return {
    userCards,
    user
  }
}

const mapDispatch = (dispatch) => {
  return {
    deleteCard: (id) => dispatch(deleteCreditCardOnServer(id))
  }
}

export default connect(mapState, mapDispatch)(CreditCards);
