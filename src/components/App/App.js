import React from 'react';
import './App.css';
import Header from '../Header/Header';
import creatures from '../../constants/creatures';
import creatureDetails from '../../constants/creatureDetails';
import CreatureList from '../CreatureList/CreatureList';

class App extends React.Component {
  state = {
    creatures: [...creatures],
    creatureDetails: [...creatureDetails],
    newCreature: '',
    newCreatureDetail: {
      name: '',
      origin: '',
    }
  }

  deleteCreatureDetail = (incomingIndex) => {
    console.log('delete:', incomingIndex);
    const creatureDetailsList = this.state.creatureDetails.filter((item, index) => {
      return incomingIndex !== index; // true keeps it; false gets rid of it;
    });
    this.setState({
      creatureDetails: creatureDetailsList
    })
  }

  addCreature = () => {
    this.setState({
      creatures: [
        ...this.state.creatures,
        this.state.newCreature,
      ],
      newCreature: '',
    })
  }

  changeInputedCreature = (event) => {
    this.setState({
      newCreature: event.target.value
    });
  }

  changeCreatureField = (event, fieldKey) => {
    console.log('key: ', fieldKey);
    this.setState({
      newCreatureDetail: {
        ...this.state.newCreatureDetail,
        [fieldKey]: event.target.value
      }
    })
  }

  submitCreature = (event) => {
    event.preventDefault();
    this.setState({
      creatureDetails: [
        ...this.state.creatureDetails, // everything from previous state
        this.state.newCreatureDetail,
      ],
      newCreatureDetail: {
        name: '',
        origin: '',
      }
    }, () => {
      console.log(this.state.creatureDetails);
    })
  }

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

        <input
          type="text"
          placeholder="creature here"
          onChange={this.changeInputedCreature}
          value={this.state.newCreature}
        />
        <button onClick={this.addCreature}>ADD CREATURE</button>

        {/* RENDER THE LIST OF CREATURES */}
        <ul>
          {this.state.creatures.map((item, index) => <li key={index}>{item}</li>)}
        </ul>


        <form onSubmit={this.submitCreature}>
          <input
            type="text"
            placeholder="Name of Creature"
            onChange={(event) => this.changeCreatureField(event, 'name')}
            value={this.state.newCreatureDetail.name}
          />
          <input
            type="text"
            placeholder="Origin of Creature"
            onChange={(event) => this.changeCreatureField(event, 'origin')}
            value={this.state.newCreatureDetail.origin}
          />
          <button>Save Creature</button>
        </form>
        <CreatureList deleteCallback={this.deleteCreatureDetail} creatureDetails={this.state.creatureDetails} />
      </div>
    );
  }
}

export default App;
