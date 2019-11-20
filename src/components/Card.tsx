import React from 'react';
import styled from 'styled-components';

import { Colors } from '../constants';

interface ICardProps {
  children: React.ReactNode;
  border?: string;
  height?: string;
  width?: string;
}

const CardContainer = styled.div`
  background-color: ${Colors.white};
  border: ${({ border }: ICardProps) => border || 'none'};
  border-radius: 4px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
  height: ${({ height }: ICardProps) => height || 'auto'}
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: ${({ width }: ICardProps) => width || 'auto'}
`;

export const Card = ({ border, children, height, width }: ICardProps) => (
  <CardContainer border={border} height={height} width={width}>
    {children}
  </CardContainer>
);
