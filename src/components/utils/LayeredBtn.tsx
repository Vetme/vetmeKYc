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
}

const LayeredBtn = ({
  width,
  height,
  bgColor,
  linkTo = "#",
  children,
  parentClassNames,
  lDir,
}: Props) => {
  return (
    <Link
      to={linkTo}
      className={`relative block cursor-pointer ${parentClassNames}`}
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
    </Link>
  );
};

export default LayeredBtn;
