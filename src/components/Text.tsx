import * as React from 'react';
import styled from 'styled-components';

interface IHeadingProps {
  children: any;
  color?: string;
  margin?: string;
  type: string;
  weight?: number;
}

interface IHelperTextProps {
  children: any;
  color?: string;
  margin?: any;
}

interface IPProps {
  children: any;
  color?: string;
  margin?: string;
  size?: string;
  weight?: number;
}

const StyledP = styled.p`
  color: ${({ color }: IPProps) => color || 'inherit'};
  font-size: ${({ size }: IPProps) => size || '16px'};
  font-weight: ${({ weight }: IPProps) => weight || 'normal'};
  margin: ${({ margin }: IPProps) => margin || '0'};
`;

const StyledHelperText = styled.p`
  color: ${({ color }: IHelperTextProps) => color || 'rgba(0, 0, 0, 0.54)'};
  display: flex;
  font-size: 0.75rem;
  font-weight: 400;
  align-items: center;
  line-height: 1.5;
  margin-top: 8px;
  margin: ${({ margin }: IHelperTextProps) => margin || '0'};
  min-height: 1em;
  text-align: left;
`;

export const Heading = ({
  children,
  color,
  margin,
  type,
  weight,
}: IHeadingProps) =>
  React.createElement(
    styled(type as any)`
      color: ${color || 'inherit'};
      font-weight: ${weight || 'normal'};
      margin: ${margin || '0'};
    `,
    {},
    children
  );

export const HelperText = ({ children, color, margin }: IHelperTextProps) => (
  <StyledHelperText color={color} margin={margin}>
    {children}
  </StyledHelperText>
);

export const P = ({ children, color, margin, size, weight }: IPProps) => (
  <StyledP color={color} margin={margin} size={size} weight={weight}>
    {children}
  </StyledP>
);
