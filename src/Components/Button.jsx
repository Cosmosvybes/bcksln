const Button = ({ name, view, isSelected }) => {
  return (
    <>
      <button
        onClick={() => view(name)}
        className={`py-3 text-left ${
          isSelected && "border-b-4 border-amber-700"
        } ${
          isSelected && "bg-amber-600"
        } rounded-none  hover:bg-amber-400 px-3 w-full text-amber-800 font-semibold`}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
