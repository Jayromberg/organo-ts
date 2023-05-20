import React from 'react';
import Box from "@src/components/Box";
import Input from '@src/components/Input';
import Label from '@src/components/Label';
import Text from '@src/components/Text';

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
  return (
    <Box
      tag='section'
    >
      <Text tag='h2'>Preencha os dados para criar o card do colaborador:</Text>
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
