import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Prismes.css';
import Triangles from '../../components/Triangles';

class Prismes extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
  }

  render() {
    return (
      <div className={styles.prismes}>
        <Triangles kind="color" />
        <Link to="prisme/0" className={styles.top}>PRIMAIRES<br />SOCIALISTES</Link>
        <Link to="prisme/2" className={styles.left}>REVENU<br />UNIVERSEL</Link>
        <Link to="prisme/1" className={styles.down}>CENTRALE<br />FESSENHEIM</Link>
        {/* <Link to="prisme/3" className={styles.right}>PRISME<br />ÉCOLOGIE</Link> */}
      </div>
    );
  }
}

export default Prismes;
