import React, { Component } from 'react';
import styles from './CreatureItem.module.css';

class CreatureItem extends Component {
  render() {
    const {
      item
    } = this.props;

    return (
      <div className={styles.box}>
        <h3>{item.name}</h3>
        <p>Origin: {item.origin}</p>
      </div>
    );
  }
}

export default CreatureItem;