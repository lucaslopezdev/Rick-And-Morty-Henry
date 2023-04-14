import React from 'react';
import styles from './About.module.css'

class About extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <>
        <h1 className={styles.titulo}>Este es el componente About</h1>
      </>
    );
  }
}

export default About;