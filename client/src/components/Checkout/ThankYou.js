import React from 'react';
import { connect } from "react-redux";
import UserNav from '../User/UserNav';

const ThankYou = ({ user, order }) => {
  return (
    <div>
      <UserNav user={ user, orderId } />
      <div className='jumbotron'>
        <h1>J²A Widgets</h1>
        <br />
        <h3>Thank you for your order!</h3>
        <br />
        <h4>You will receive an email shortly with details about Order#{orderId}</h4>
      </div>
    </div>
  );
}


const mapState = ({ user }, { orderId }) => {
  return { user, orderId }
}

export default connect(mapState)(ThankYou);
