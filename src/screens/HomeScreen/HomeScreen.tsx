import Box from "@src/components/Box";
import Text from "@src/components/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background";
import Form from "./patterns/Form";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: theme.colors.neutral.x000,
      }}
    >
      <Background />
      <Box
        tag="section"
        styleSheet={{
          justifyContent: "center",
          alignItems: "center",
          margin: '80px 0',
        }}
      >
        <Form>
          <Text tag='h2' variant="heading2">Preencha os dados para criar o card do colaborador:</Text>
          <Form.Input labelName="Nome" placeholder="Digite seu nome" />
          <Form.Input labelName="Cargo" placeholder="Digite seu cargo" />
          <Form.Input labelName="Imagem" placeholder="Digite o endereço da imagem" />
        </Form>
      </Box>
    </Box>
  )
}
