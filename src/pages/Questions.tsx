import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LayeredBtn from "../components/utils/LayeredBtn";
import TextInput from "../components/utils/TextInput";
import TextInput2 from "../components/utils/TextInput2";

const Question = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full gap-4 ml-10 mt-7">
        <div className="absolute">
          <span className="uppercase text-[#170728] text-lg block mb-5">
            WHAT COMPANY ARE YOU DOING YOUR KYC FOR?
          </span>
          <div className="absolute">
            <TextInput placeholder="Kindly provide your answers" />
            <div className="flex gap-6 mt-8 ml-10">
              <LayeredBtn bgColor="#E4E4E4" width="147px" height="63px">
                <span className="text-[#170728] text-[0.87em] ">Back</span>
              </LayeredBtn>
              <LayeredBtn bgColor="#BEFECD" width="147px" height="63px">
                <span className="text-[#170728] text-[0.87em] ">Next</span>
              </LayeredBtn>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Question;
