import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface InputProps {
  type?: string;
  placeholder?: string;
  id?: string;
  styleSheet?: StyleSheet
}
export default function Input({type, placeholder, id, styleSheet, ...props}: InputProps) {
  return (
    <BaseComponent
      as="input"
      type={type}
      placeholder={placeholder}
      id={id}
      styleSheet={styleSheet}
      {...props}
    />
  )
}

Input.defaultProps = {
  type: 'text',
}
