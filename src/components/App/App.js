import React from 'react';
import './App.css';
import Header from '../Header/Header';
import creatures from '../../constants/creatures';
import creatureDetails from '../../constants/creatureDetails';
import CreatureList from '../CreatureList/CreatureList';

class App extends React.Component {
  render() {
    // const liCreatures = [];
    // for (let i = 0; i < creatures.length; i++) {
    //   const creatureItem = creatures[i];
    //   liCreatures.push(<li key={i}>{creatureItem}</li>);
    // }

    // const liCreatures = creatures.map((item, index) => {
    //   return <li key={index}>{item}</li>;
    // });

    // const liCreatures = creatures.map((item, index) => <li key={index}>{item}</li>);

    

    return (
      <div>
        <Header />

        {/* RENDER THE LIST OF CREATURES */}
        <ul>
          {creatures.map((item, index) => <li key={index}>{item}</li>)}
        </ul>

        <CreatureList creatureDetails={creatureDetails} />
      </div>
    );
  }
}

export default App;
