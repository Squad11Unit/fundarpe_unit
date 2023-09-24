const Input = ({ type, value, onChange, name, placeholder }) => (
  <div>
    <input
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </div>
);

export default Input;
