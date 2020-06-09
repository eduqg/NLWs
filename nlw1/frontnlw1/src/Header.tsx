import React from 'react';

// import { Container } from './styles';

interface HeaderProps {
  // Se não é obrigatório, colocar ? após title
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { title } = props;

  return (
    <header>
      <h1>Header {title}</h1>
    </header>
  );
}

export default Header;