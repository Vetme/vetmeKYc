import React from "react";
import { TbCloudDownload } from "react-icons/tb";
import { FormCon } from "../../styles";

const Certification = () => {
  return (
    <div>
      <FormCon className="cert">
        <div className="px-[50px] py-[50px]">
          <div className="header">
            <h4>Certificate</h4>
          </div>

          <h3 className="font-semibold text-[1.1em] mb-4">
            VetMe Know Your Customer Certification
          </h3>
          <div className="font-light leading-[30px] w-11/12 text-justify">
            <p className="mb-4">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
            </p>
            <p className="mb-4">
              Curabitur vel bibendum lorem. Morbi convallis convallis diam sit
              amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis
              eros tempus lacinia. Nam bibendum pellentesque quam a convallis.
              Sed ut vulputate nisi. Integer in felis sed leo vestibulum
              venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
              vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
              porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet
              magna non ligula vestibulum eleifend. Nulla varius volutpat turpis
              sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante
              dictum sem condimentum ullamcorper quis venenatis nisi. Proin
              vitae facilisis nisi, ac posuere leo.
            </p>

            <p className="mb-4">
              Nam pulvinar blandit velit, id condimentum diam faucibus at.
              Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue
              felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus
              non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl
              neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam
              dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin
              felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis
              nisi, consequat dictum risus dapibus a. Duis felis ante, varius in
              neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem
              sit amet cursus. Etiam pulvinar purus vitae justo pharetra
              consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat
              tellus id tempus aliquet.
            </p>
          </div>

          <button className="flex gap-3 items-center justify-center w-[349px] h-[51px] border border-[#170728] rounded-[14px] mt-7">
            <TbCloudDownload />
            <span className="text-[#170728]">Download KYC certificate-PDF</span>
          </button>
        </div>
      </FormCon>
    </div>
  );
};

export default Certification;
