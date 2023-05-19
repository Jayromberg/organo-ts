import Box from "@src/components/Box";
import Image from "@src/components/Image";

export default function Background() {
  return (
    <Box
      tag="header"
      styleSheet={{
        backgroundColor: '#6278f7',
        textAlign: 'center',
      }}
    >
      <Image src="/images/banner.png" alt="banner principal do site" />
    </Box>
  );
}