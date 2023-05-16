import { BiPlay } from "react-icons/bi";

interface Props {
  fileName: string;
  date: string;
  time: string;
  duration: string;
}

const AudioPlayback = ({ fileName, date, time, duration }: Props) => {
  return (
    <div className="mb-4">
      <img
        src="shape10.png"
        alt=""
        className="absolute left-[50px] w-[340px]"
      />
      <div className="flex items-center justify-between gap-3 h-[90px] w-[300px] relative top-3 left-[80px]">
        <div className="flex gap-4">
          <div className="bg-[#7DA9FF] h-9 w-9 rounded-full flex justify-center items-center">
            <BiPlay size="19" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#453953] text-[14px] uppercase">
              {fileName}
            </span>
            <span className="text-[#8C8C8C] text-[10px]">{date}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-[#8C8C8C] text-[10px]">
          <span>{duration}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayback;
