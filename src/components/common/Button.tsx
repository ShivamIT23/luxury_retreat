import { button as Motionbutton } from "motion/react-client";
import { useNavigate } from "react-router-dom";


function Button({
  buttonText,
  handleClick,
  className
}: {
  buttonText: string | React.ReactNode;
  handleClick?: (() => void )| string;
  className ?:string;
}) {

  const navigate = useNavigate();

  const handleClickFunction = async() => {
    if (typeof handleClick === "string" && handleClick) {
      handleClick.includes("/") ? navigate(handleClick) : console.log("Clicked");
    }
    else if (typeof handleClick === "function" && handleClick) handleClick();
  };
  return (
    <Motionbutton
    whileHover={{scale:1.05, boxShadow: "0px 4px 4px #00000025"}}
    whileTap={{scale:0.95, boxShadow: "0px 2px 2px #00000025"}}
      onClick={handleClickFunction}
      className={`bg-[#285F69] text-white shadow-[0px_4px_4px_#00000025] p-3 uppercase ${className}`}
    >
      {buttonText}
    </Motionbutton>
  );
}

export default Button;
