import React from 'react';
import styled from 'styled-components';

interface IContainerProps {
  children: any;
}

const ContainerContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 25px;
`;

const ContentContainer = styled.div`
  box-sizing: border-box;
  display: block;
  flex-grow: 1;
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 25px;
  padding-top: 55px;
`;

export const Container = ({ children }: IContainerProps) => (
  <ContainerContainer>{children}</ContainerContainer>
);

export const Content = ({ children }: IContainerProps) => (
  <ContentContainer>{children}</ContentContainer>
);
