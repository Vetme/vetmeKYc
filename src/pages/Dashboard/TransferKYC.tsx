import DashboardLayout from "../../components/layout/DashboardLayout";
import LayeredBtn from "../../components/utils/LayeredBtn";
import TextInput from "../../components/utils/TextInput";

const TransferKYC = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-4">
        <div className="absolute">
          <TextInput label="Search Company" />
          <LayeredBtn
            bgColor="#BEFECD"
            width="90%"
            height="63px"
            parentClassNames="left-[30px] mb-4"
            linkTo="" // pass the path here
          >
            <span className="text-[#170728] uppercase">Transfer KYC</span>
          </LayeredBtn>
        </div>

        <div className="bg-[#EFF1EA] rounded-lg h-[63px] relative top-[200px]">
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
