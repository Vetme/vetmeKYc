const Footer = () => {
  return (
    <footer className="container mx-auto my-4 bg-[#EFF1EA] lg:flex grid justify-center lg:justify-between items-center p-2 border rounded-[19px] h-[91px] w-full">
      <img src="/logo.png" alt="" />
      <div className="flex gap-3 uppercase">
        <span>{"{Instagram}"}</span>
        <span>{"{Facebook}"}</span>
        <span>{"{Twitter}"}</span>
      </div>
    </footer>
  );
};

export default Footer;
