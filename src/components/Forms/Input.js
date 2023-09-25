const Input = ({ type, value, onChange, name, placeholder }) => (
  <input
    onChange={onChange}
    name={name}
    placeholder={placeholder}
    type={type}
    value={value}
  />
);

export default Input;
