import React, { ReactNode } from "react";
import { Loader } from "../styles";
import { FadeLoader } from "react-spinners";

interface LoaderProps {
  children: ReactNode;
  busy: boolean;
}

const FormLoader: React.FC<LoaderProps> = ({ children, busy }) => {
  return (
    <>
      {busy && (
        <Loader>
          <FadeLoader
            color="#170728"
            height={15}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              position: "relative",
            }}
            width={5}
          />
          {children}
        </Loader>
      )}
    </>
  );
};

export default FormLoader;
