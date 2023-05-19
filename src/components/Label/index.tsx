import React from "react";
import { BaseComponent } from "@src/theme/BaseComponent";

interface LabelProps {
  children: React.ReactNode
  htmlFor: string
}
export default function Label({children, htmlFor}: LabelProps) {
  return (
    <BaseComponent
      as="label"
      htmlFor={htmlFor}
      styleSheet={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '24px',
      }}
    >
      {children}
    </BaseComponent>
  );
}