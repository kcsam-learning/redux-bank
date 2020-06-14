import C from '../constants';

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case C.WITHDRAW_MONEY:
      return {
        ...state,
        totalAmount: state.totalAmount - action.amount
      }
    case C.ALL_OUT_DONATION:
      return {
        ...state,
        totalAmount: 0
      }
    default:
      return state;
  }
}
