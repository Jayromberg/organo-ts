import { BaseComponent } from "@src/theme/BaseComponent";
import { StyleSheet } from "@src/theme/StyleSheet";

interface InputProps {
  type?: string;
  styleSheet?: StyleSheet;
}
export default function Input({type, ...props}: InputProps) {
  <BaseComponent
      as="input"
      type={type}
      {...props}
    />
}

Input.defaultProps = {
  type: 'text',
}
