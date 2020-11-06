import React from 'react';

import { Container } from './styles';
import Menu from './components/Menu';
import Box from './components/Box';

function Dashboard() {
  return (
    <Container>
     <Menu /> 
     <Box />
    </Container>
    
  );
}

export default Dashboard;