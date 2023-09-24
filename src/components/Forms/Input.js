const Input = ({ type, value, onChange, name, placeholder, label }) => (

  <div>
    <label htmlFor={label}>{label}: </label>
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