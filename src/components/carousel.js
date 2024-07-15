import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia } from '@mui/material';

const Carrossel = ({ children }) => {
  return (
    <Carousel>
      {React.Children.map(children, (child, index) => (
        <Card key={index}>
          <CardMedia component="img" image={child.props.src} alt={child.props.alt} />
        </Card>
      ))}
    </Carousel>
  );
};

export default Carrossel;
