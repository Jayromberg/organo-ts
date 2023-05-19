import React from 'react';
import Box from "@src/components/Box";
import Input from '@src/components/Input';

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({children}: FeedProps) {
  return (
    <Box
      styleSheet={{
        margin: '24px 0',
      }}
    >
      {children}
    </Box>
  );
}

Feed.Form = () => {
  return (
    <div>
      <h1>Form</h1>
    </div>
  );
}
