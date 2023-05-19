import React from 'react';
import Box from "@src/components/Box";
import Input from '@src/components/Input';
import { useTheme } from '@src/theme/ThemeProvider';
import Label from '@src/components/Label';

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
      <Label htmlFor="input-name">Nome</Label>
      <Input
        id="input-name"
        placeholder="Digite seu nome"
      />
      <Label htmlFor="input-cargo">Cargo</Label>
      <Input
        id="input-cargo"
        placeholder="Digite seu cargo"
      />
      <Label htmlFor="input-image">Imagem</Label>
      <Input
        id="input-image"
        placeholder="Digite o endereço da imagem"
      />
    </Box>
  );
}
