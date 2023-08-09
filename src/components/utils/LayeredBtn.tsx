import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  width: string;
  height: string;
  bgColor: string;
  linkTo?: string;
  parentClassNames?: string;
  children: ReactNode;
  lDir?: string;
  onClick?: () => void;
  block?: boolean;
  type?: any;
  loading?: boolean;
  disabled?: boolean;
}

const LayeredBtn = ({
  width,
  height,
  bgColor,
  linkTo = "#",
  children,
  parentClassNames,
  loading,
  disabled,
  lDir,
  block,
  onClick,
  type = "submit",
}: Props) => {
  return (
    <button
      type={type}
      // to={linkTo}
      onClick={onClick}
      className={`relative block cursor-pointer ${parentClassNames} ${
        block && "w-full"
      } fc-button`}
      disabled={loading || disabled}
    >
      <div
        className={`bg-white flex items-center justify-center uppercase 
           border border-[#2E203E] rounded-[14px] relative bg-[${bgColor}]`}
        style={{
          width: `${width}`,
          height: `${height}`,
        }}
      ></div>
      <div
        className={`flex items-center gap-3 justify-center uppercase
           border border-[#2E203E] rounded-[14px] absolute -top-[4px]  ${
             lDir == "right" ? "right-[4px]" : "left-[4px]"
           }`}
        style={{
          backgroundColor: `${bgColor}`,
          width: `${width}`,
          height: `${height}`,
        }}
      >
        {children}
      </div>
    </button>
  );
};

export default LayeredBtn;
