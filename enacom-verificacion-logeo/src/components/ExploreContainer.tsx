import React from 'react';
import './ExploreContainer.css';
import Formulario from './Formulario/Formulario';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <Formulario></Formulario>
    </div>
  );
};

export default ExploreContainer;
