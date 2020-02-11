import { USERS_TYPES } from '../../core/constants/actionTypes';

export const cntrlLogin = payload => {
  return {
    type: USERS_TYPES.CNTRL_LOGIN,
    payload,
  }
};

export const rxLoginPending = payload => {
  return {
    type: USERS_TYPES.RX_LOGIN_PENDING,
    payload
  }
};

export const rxLoginDone = payload => {
  return {
    type: USERS_TYPES.RX_LOGIN_DONE,
    payload
  }
};

export const cntrlSetToken = payload => {
  return {
    type: USER_TYPES.CNTRL_SET_TOKEN,
    payload
  }
};


export const cntrlRemoveToken = payload => {
  return {
    type: USERS_TYPES.CNTRL_REMOVE_TOKEN,
    payload
  }
};


/* logOut*/

export const cntrlLogOut = payload => {
  return {
    type: USERS_TYPES.CNTRL_LOGOUT ,
    payload,
  }
};

/*forgot password*/



export const cntrlRegister = payload => {
  return {
    type: USERS_TYPES.CNTRL_REGISTER,
    payload
  }
};

export const rxRegister = payload => {
  return {
    type: USERS_TYPES.RX_REGISTER,
    payload
  }
};

export const rxRegisterPending = payload => {
  return {
    type: USERS_TYPES.RX_REGISTER_PENDING,
    payload
  }
};

export const rxRegisterDone = payload => {
  return {
    type: USERS_TYPES.RX_REGISTER_DONE,
    payload
  }
};


// export const cntrlSetRegisterData = payload => {
//   return {
//     type: AUTH_TYPES.CNTRL_SET_REGISTER_DATA,
//     payload
//   }
// };
