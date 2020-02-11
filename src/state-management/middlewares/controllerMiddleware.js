const handleException = err => {
  if (err.hasOwnProperty('success') && !err.success) {
    if (err.hasOwnProperty('error') && err.error.hasOwnProperty('message')) {
      alert(err.error.message);
    } else {
      alert('err')
    }
  } else {
    alert('err')
  }
  console.error(err, 'errrror');
};

const handleAtomicExceptions = err => {
  console.error(err, "error");
};

/**
 * This middleware declares if action for controller or for reducer
 * @param configs
 */
const controllerMiddleware = configs => state => next => action => {
  if (configs[action.type] && typeof configs[action.type] === 'function') {
    try {
      const result = configs[action.type](state, action);
      if (result instanceof Promise) {
        result.catch(handleException);
      }
    } catch(err) {
      handleAtomicExceptions(err);
    }
  } else {
    return next(action);
  }
};

export default controllerMiddleware;