import React, { Component } from 'react';
import CreatureItem from '../CreatureItem/CreatureItem';

class CreatureList extends Component {
  render() {
    const creatureBoxes = this.props.creatureDetails.map((item, index) => {
      return (
        <CreatureItem deleteCallback={this.props.deleteCallback} item={item} index={index} key={index} />
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