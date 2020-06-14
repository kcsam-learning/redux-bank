import React, { Component } from 'react';
import { store } from '../../store';
import { withdrawMoney, allOutDonation } from '../../actions';

class ButtonGroup extends Component {
  withdrawMoney = (e) => {
    const amount = e.target.dataset.amount;
    store.dispatch(withdrawMoney(amount));
  }

  allOutDonation () {
    store.dispatch(allOutDonation);
  }

  render() {
    return (
      <div>
        <section className="App__buttons">
          <button data-amount="10000" onClick={this.withdrawMoney}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={this.withdrawMoney}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway" onClick={this.allOutDonation}>Give away all your cash to charity</p>
      </div>
    )
  }
}

export default ButtonGroup;
