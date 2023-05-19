import React from 'react';
import Box from "@src/components/Box";
import Input from '@src/components/Input';
import { useTheme } from '@src/theme/ThemeProvider';

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({children}: FeedProps) {
  return (
    <Box>
      {children}
    </Box>
  );
}

Feed.Form = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        margin: '24px 0',
      }}
    >
      <Input
        placeholder="Digite seu nome"
      />
      <Input
        placeholder="Digite seu cargo"
      />
      <Input
        placeholder="Digite o endereço da imagem"
      />
    </Box>
  );
}
