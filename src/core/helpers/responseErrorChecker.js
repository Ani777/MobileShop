const responseErrorCheck = response => {
  if (response.status === 0 ) {
    throw new Error(response.errorMessage)
  } else {
    return response.result;
  }
};

export default responseErrorCheck;