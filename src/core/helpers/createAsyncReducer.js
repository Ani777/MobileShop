const DONE = 'DONE';
const REJECTED = 'REJECTED';
const PENDING = 'PENDING';

const createAsyncReducer = (prefix, initialState) => (state = { isLoading: true, data: initialState }, action) => {
  const { type } = action;
  switch ( type ) {
    case `${prefix}_${PENDING}`:
      return { data: initialState, isLoading: true, error: null };
    case `${prefix}_${DONE}`:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null
      };
    case `${prefix}_${REJECTED}`:
      return {
        ...state,
        data: {},
        isLoading: false,
        error: action.payload
      };
    default:
      return state
  }
};

export default createAsyncReducer;