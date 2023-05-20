import React from 'react';
import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface BoxProps {
  tag: 'main'| 'header' | 'div' | 'article' | 'section' | 'form' | 'ul';
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}

export default function Box({ styleSheet, tag, children, ...props }: BoxProps) {
  return (
    <BaseComponent as={tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}

Box.defaultProps = {
  tag: 'div',
}
