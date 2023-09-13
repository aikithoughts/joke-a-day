import React from 'react';
import { Container } from 'react-bootstrap';

const CenteredContainer = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensures the container covers the full viewport height
      }}
    >
      <Container>{children}</Container>
    </div>
  );
};

export default CenteredContainer;