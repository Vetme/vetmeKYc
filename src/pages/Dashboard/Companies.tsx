import DashboardLayout from "../../components/layout/DashboardLayout";
import LayeredBtn from "../../components/utils/LayeredBtn";
import TextInput from "../../components/utils/TextInput";

const Companies = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-4">
        <div className="">
          <TextInput label="Company Name/Registration Number" />
          <LayeredBtn
            bgColor="#BEFECD"
            width="90%"
            height="63px"
            parentClassNames="left-[30px] mb-4"
            linkTo="" // pass the path here
          >
            <span className="text-[#170728] uppercase">Find Company</span>
          </LayeredBtn>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Companies;
