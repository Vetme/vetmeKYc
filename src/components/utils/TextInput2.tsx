const TextInput2 = () => {
  return (
    <div className="relative mb-4">
      <img src="/input-shape2.png" alt="" className="block mx-auto" />
      <input
        type="text"
        className="absolute top-[65%] left-[63%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40px] text-center outline-0"
        maxLength={1}
      />
    </div>
  );
};

export default TextInput2;
