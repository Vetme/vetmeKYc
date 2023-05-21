import DashboardLayout from "../../components/layout/DashboardLayout";
import LayeredBtn from "../../components/utils/LayeredBtn";
import TextInput from "../../components/utils/TextInput";

const TransferKYC = () => {
  return (
    <DashboardLayout>
      <div className="mt-8 h-screen">
        <div className="mb-4">COMPANY NAME/REGISTRATION NUMBER</div>
        <div className="grid items-end grid-company">
          <TextInput
            label="Search Company"
            inputCustomClassNames="w-[80%] left-[41%] lg:left-[44%]"
            shapeCustomClassNames="w-full"
            labelCustomClassNames="left-[29px] lg:left-[33px]"
          />
          <LayeredBtn
            bgColor="#BEFECD"
            width="90%"
            height="43px"
            parentClassNames="left-[30px] mb-4"
            linkTo="" // pass the path here
          >
            <span className="text-[#170728] uppercase">Transfer KYC</span>
          </LayeredBtn>
        </div>

        <div className="bg-[#EFF1EA] rounded-lg h-[63px] relative">
          <p className="text-[11px] text-[#170728] p-3">
            Note: Your company details are provided courtesy of the government
            policy using their official API. This guarantees the data’s
            integrity.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TransferKYC;
