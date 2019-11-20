import React from 'react';
import styled from 'styled-components';

import { Colors } from '../constants';

interface IButtonProps {
  backgroundColor?: string;
  border?: string;
  children: any;
  color?: string;
  disabled?: boolean;
  margin?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => any;
  padding?: string;
  textDecoration?: string;
  textTransform?: string;
  type?: 'button' | 'reset' | 'submit';
  weight?: number;
  width?: string;
}

interface IButtonGroupProps {
  children: any;
  margin: string;
}

const StyledButton = styled.button`
  background-color: ${({ backgroundColor }: IButtonProps) =>
    backgroundColor || Colors.blue};
  border: ${({ border }: IButtonProps) => border || 'none'};
  border-radius: 4px;
  color: ${({ color }: IButtonProps) => color || Colors.white};
  font-family: 'Barlow';
  font-weight: ${({ weight }: IButtonProps) => weight || 'initial'};
  margin: ${({ margin }: IButtonProps) => margin || 0};
  padding: ${({ padding }: IButtonProps) => padding || 0};
  text-decoration: ${({ textDecoration }: IButtonProps) =>
    textDecoration || 'none'};
  text-transform: ${({ textTransform }: IButtonProps) =>
    textTransform || 'none'};
  width: ${({ width }: IButtonProps) => width || 'initial'};
`;

const StyledButtonGroup = styled.div`
  display: inline-flex;
  margin: ${({ margin }: { margin: string }) => margin || '0'};
`;

export const Button = ({
  backgroundColor,
  border,
  children,
  color,
  disabled,
  margin,
  onClick,
  padding,
  textTransform,
  type,
  textDecoration,
  weight,
  width,
}: IButtonProps) => (
  <StyledButton
    backgroundColor={backgroundColor}
    border={border}
    color={color}
    disabled={disabled}
    margin={margin}
    onClick={onClick}
    padding={padding}
    textDecoration={textDecoration}
    textTransform={textTransform}
    type={type || 'button'}
    weight={weight}
    width={width}
  >
    {children}
  </StyledButton>
);

export const ButtonGroup = ({ children, margin }: IButtonGroupProps) => (
  <StyledButtonGroup margin={margin}>{children}</StyledButtonGroup>
);
