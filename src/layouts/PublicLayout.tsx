import React, { ReactNode } from "react";

interface PublicLayoutProps {
  children: ReactNode;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return <div className="layout-public">{children}</div>;
};
