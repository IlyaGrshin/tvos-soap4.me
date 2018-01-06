import { connect } from 'react-redux';

import { DATA_PENDING } from '../redux/constants';

export default connect(state => {
  const {
    token,
    logged,
    extended,
    fetchStatus,
  } = state.account;

  return {
    fetchingAccount: fetchStatus === DATA_PENDING,
    account: {
      token,
      logged,
      extended,
    },
  };
});
