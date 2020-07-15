import React, { Component } from 'react';
import styles from './CreatureItem.module.css';

class CreatureItem extends Component {
  deleteMe = () => {
    this.props.deleteCallback(this.props.index);
  }

  render() {
    const {
      item
    } = this.props;

    return (
      <div className={styles.box}>
        <h3>{item.name}</h3>
        <p>Origin: {item.origin}</p>
        <button onClick={this.deleteMe}>DELETE</button>
      </div>
    );
  }
}

export default CreatureItem;