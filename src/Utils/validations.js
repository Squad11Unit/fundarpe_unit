const validateEmail = (email) => {
  return email?.toString().includes('@') && email?.toString().includes('.') && email?.toString().length >= 6;
}

const validatePassword = (password) => {
  return password?.toString().length >= 6 && password?.toString().length <= 12;
}

export { validateEmail, validatePassword };