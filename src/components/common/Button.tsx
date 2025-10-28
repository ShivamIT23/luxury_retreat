function Button({
  buttonText,
  handleClick,
  className
}: {
  buttonText: string | React.ReactNode;
  handleClick?: () => void;
  className ?:string;
}) {
  return (
    <button
      onClick={handleClick ? handleClick : () => console.log("Clicked")}
      className={`bg-[#285F69] text-white shadow-[0px_4px_4px_#00000025] p-3 uppercase ${className}`}
    >
      {buttonText}
    </button>
  );
}

export default Button;
