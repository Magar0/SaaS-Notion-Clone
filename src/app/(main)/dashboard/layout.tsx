import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  return <main className="h-scree flex overflow-hidden">{children}</main>;
};

export default Layout;
