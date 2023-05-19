import Box from "@src/components/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Background />
      <h1>Home Screen</h1>
    </Box>
  )
}
