const Button = (props) => {
  return (
    <button className="bg-gray-100 border-b border-r border-gray-400 hover:bg-slate-300">
      {props.label}
    </button>
  );
};

export default Button;
