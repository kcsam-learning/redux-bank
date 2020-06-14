export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'WITHDRAW_MONEY':
      return {
        ...state,
        totalAmount: state.totalAmount - action.amount
      }
    case 'ALL_OUT_DONATION':
      return {
        ...state,
        totalAmount: 0
      }
    default:
      return state;
  }
}
