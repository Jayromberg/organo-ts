import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";

interface InputProps {
  type?: string;
  placeholder?: string;
  id?: string;
}
export default function Input({type, placeholder, id, ...props}: InputProps) {
  const theme = useTheme();

  return (
    <BaseComponent
      as="input"
      type={type}
      placeholder={placeholder}
      id={id}
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.06)',
        width: '100%',
        border: 'none',
        fontSize: '24px',
        padding: '24px',
      }}
      {...props}
    />
  )
}

Input.defaultProps = {
  type: 'text',
}
