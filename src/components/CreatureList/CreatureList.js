import React, { Component } from 'react';
import CreatureItem from '../CreatureItem/CreatureItem';

class CreatureList extends Component {
  render() {
    const creatureBoxes = this.props.creatureDetails.map((item, index) => {
      return (
        <CreatureItem item={item} key={index} />
      );
    });

    return (
      <div>
        {creatureBoxes}
      </div>
    );
  }
}

export default CreatureList;