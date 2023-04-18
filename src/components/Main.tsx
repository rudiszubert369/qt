import React from 'react';
import styles from './Main.module.scss'
import Carousel from './Carousel';
import Container from './Container';

function Main() {
  return (
    <Container>
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Container width 1170px</p>
        <p>Gutter 30px</p>

      </div>
    </div>
      <Carousel />
    </Container>
  );
}

export default Main;
