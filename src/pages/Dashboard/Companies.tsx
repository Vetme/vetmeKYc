import DashboardLayout from "../../components/layout/DashboardLayout";
import LayeredBtn from "../../components/utils/LayeredBtn";
import TextInput from "../../components/utils/TextInput";

const Companies = () => {
  return (
    <DashboardLayout>
      <div className="mt-8 h-screen">
        <div className="grid items-end grid-company">
          <TextInput
            label="Company Name/Registration Number"
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
            <span className="text-[#170728] uppercase">Find Company</span>
          </LayeredBtn>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Companies;
