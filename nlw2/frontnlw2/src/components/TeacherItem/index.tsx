import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>

        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Person" />
        <div>
          <strong>Marilene</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada
      <br />
        <br />
      Apaixonada por explodir coisas
    </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$80,00</strong>
        </p>
        <button>
          <img src={wppIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
      </footer>

    </article>
  );
}

export default TeacherItem;