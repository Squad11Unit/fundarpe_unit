const validatePassword = (password) => {
  return password?.toString().length >= 6 && password?.toString().length <= 12 && password?.toString().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/);
}

export { validatePassword };