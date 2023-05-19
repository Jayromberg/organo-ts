import Box from "@src/components/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background";
import Feed from "./patterns/Feed";

export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Background />
      <Feed />
    </Box>
  )
}
