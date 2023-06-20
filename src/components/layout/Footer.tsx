import { LogoSVG } from "../icons";

const Footer = () => {
  return (
    <footer className=" footer-wrapper px-[26px] mx-auto mb-6  lg:flex grid justify-center lg:justify-between items-center border rounded-[19px] h-[91px] w-full">
      <div className="mb-4 sm:mb-0">
        <LogoSVG />
      </div>

      <div className="hidden sm:flex gap-3 uppercase">
        <span>{"{Instagram}"}</span>
        <span>{"{Facebook}"}</span>
        <span>{"{Twitter}"}</span>
      </div>
      <div className="copy">vetme ©2022</div>
    </footer>
  );
};

export default Footer;
