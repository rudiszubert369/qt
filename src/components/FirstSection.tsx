import React from 'react';
import styles from './FirstSection.module.scss';

const FirstSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first_row}>
        <div className={`${styles.box} ${styles.box1}`}>1<br />height: 200px</div>
        <div className={`${styles.box} ${styles.mid_box}`}>2<br />height: 200px</div>
        <div className={`${styles.box} ${styles.box1}`}>3<br />height: 200px</div>
      </div>
      <div className={styles.first_row}>
        <div className={`${styles.box} ${styles.box2}`}>4<br />height: 200px</div>
        <div className={`${styles.box} ${styles.box3}`}>5<br />height: 200px</div>
        <div className={`${styles.box} ${styles.box4}`}>6<br />height: 200px</div>
      </div>
    </div>
  );
}

export default FirstSection;
