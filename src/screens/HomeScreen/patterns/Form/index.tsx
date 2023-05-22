import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { useTheme } from '@src/theme/ThemeProvider';
import Box from "@src/components/Box";
import Input from '@src/components/Input';
import Label from '@src/components/Label';
import Text from '@src/components/Text';

interface FormProps {
  children: React.ReactNode;
}
export default function Form({children}: FormProps) {
  const theme = useTheme();
  return (
    <Box
      tag='form'
      styleSheet={{
        backgroundColor: theme.colors.primary.x200,
        maxWidth: '80%',
        borderRadius: '20px',
        padding: '32px 64px',
        boxShadow: '8px 8px 16px rgba(0, 0 ,0, 0.08)',
      }}
    >
      {children}
    </Box>
  );
}
interface FormInputProps {
  labelName: string;
  placeholder: string;
}
Form.Input = ({labelName, placeholder}: FormInputProps) => {
  const theme = useTheme();
  const id = uuidv4();
  return (
    <Box
      styleSheet={{
        margin: '24px 0',
      }}
    >
      <Label
        htmlFor={id}
        styleSheet={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '24px',
        }}
      >
        <Text
          variant="heading4"
        >
          {labelName}
        </Text>
      </Label>
      <Input
        id={id}
        placeholder={placeholder}
        styleSheet={{
          backgroundColor: theme.colors.neutral.x000,
          boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.06)',
          width: '100%',
          border: 'none',
          fontSize: '24px',
          padding: '24px',
        }}
      />
    </Box>
  );
}
