const TextField = ({ label, name, value, onChange, type }) => {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-sm  mr-3 bg-white z-10 absolute -top-3"
      >
        {label}
      </label>
      <input
        type={type}
        autoComplete="off"
        className="textField__input z-0"
        name={name}
        onChange={onChange}
        value={value}
        id={name}
      />
    </div>
  );
};

export default TextField;
