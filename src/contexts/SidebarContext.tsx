import React, { useEffect, useState } from "react";

type SidebarContextType = {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
  sidebarIsOpen: false,
  toggleSidebar: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const SidebarContextProvider = ({ children }: Props) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  // useEffect(() => {
  //   setSidebarIsOpen(!sidebarIsOpen);
  // }, []);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <SidebarContext.Provider value={{ sidebarIsOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
