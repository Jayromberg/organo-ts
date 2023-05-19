import Box from "@src/components/Box";
import Image from "@src/components/Image";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Background() {
  const theme = useTheme();
  return (
    <Box
      tag="header"
      styleSheet={{
        backgroundColor: theme.colors.primary.x050,
        textAlign: 'center',
      }}
    >
      <Image
        styleSheet={{
          maxWidth: '100%',
        }}
        src="/images/banner.png" 
        alt="banner principal do site"
      />
    </Box>
  );
}