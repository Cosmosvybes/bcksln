const Button = ({ name, view, isSelected }) => {
  return (
    <>
      <button
        onClick={() => view(name)}
        className={`py-3 text-left ${
          isSelected && "border-l-4 border-amber-700"
        } rounded-none bg-amber-500  hover:bg-amber-600 px-3 w-full text-amber-700 font-semibold`}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
