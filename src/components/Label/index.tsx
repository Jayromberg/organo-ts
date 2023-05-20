import React from "react";
import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface LabelProps {
  children: React.ReactNode
  htmlFor: string
  styleSheet?: StyleSheet
}
export default function Label({children, htmlFor, styleSheet}: LabelProps) {
  return (
    <BaseComponent
      as="label"
      htmlFor={htmlFor}
      styleSheet={styleSheet}
    >
      {children}
    </BaseComponent>
  );
}