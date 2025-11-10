import { button as Motionbutton } from "motion/react-client";


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
    <Motionbutton
    whileHover={{scale:1.05, boxShadow: "0px 4px 4px #00000025"}}
    whileTap={{scale:0.95, boxShadow: "0px 2px 2px #00000025"}}
      onClick={handleClick ? handleClick : () => console.log("Clicked")}
      className={`bg-[#285F69] text-white shadow-[0px_4px_4px_#00000025] p-3 uppercase ${className}`}
    >
      {buttonText}
    </Motionbutton>
  );
}

export default Button;
