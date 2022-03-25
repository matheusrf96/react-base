import React from 'react';

import { Paragraph, Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small> oi</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet...</Paragraph>
    </Container>
  );
}
