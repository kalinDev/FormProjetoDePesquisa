import { ReactNode } from 'react';
import { WrapperStyle } from './WrapperStyle';

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <div style={WrapperStyle}>
      {children}
    </div>
  );
}
