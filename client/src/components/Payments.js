import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="Emaily"
          description="$5 for 5 email credits"
          amount={500}
          token={this.props.handleToken}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn">Add Credits</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
