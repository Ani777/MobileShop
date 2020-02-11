const validator = input => {
  const regExp = /^[0-9]*$/;
  return regExp.test(input)
}

export default validator;