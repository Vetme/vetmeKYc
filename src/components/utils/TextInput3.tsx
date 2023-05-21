interface Props {
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  shapeCustomClassNames?: string;
  inputCustomClassNames?: string;
  labelCustomClassNames?: string;
}

const TextInput = ({
  label,
  placeholder,
  shapeCustomClassNames,
  inputCustomClassNames,
  labelCustomClassNames,
  isRequired = true,
}: Props) => {
  return (
    <div className="relative mb-6 lg:mb-4">
      {label && (
        <label
          htmlFor={label}
          className={
            `flex items-center text-[0.89em] absolute -top-2 lg:-top-[3px] left-20 lg:left-12 ` +
            (labelCustomClassNames ? labelCustomClassNames : "")
          }
        >
          <span className="uppercase text-xs lg:text-sm tracking-[1px]">
            {label}{" "}
          </span>
          <span className="text-[#F24E1E]">{isRequired && "*"}</span>
        </label>
      )}

      <img
        src="/input-shape.png"
        alt=""
        className={
          shapeCustomClassNames
            ? shapeCustomClassNames
            : "block mx-auto w-[70%] lg:w-[90%]"
        }
      />

      <input
        type="text"
        className={
          `h-[30px] lg:h-[40px]  absolute top-[65%] lg:left-[45%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 outline-0
        placeholder:uppercase placeholder:text-[#170728]` +
          (inputCustomClassNames ? inputCustomClassNames : " ")
        }
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
