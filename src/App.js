import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { id: 'a', name: 'Max', age: 28 },
      { id: 'b', name: 'Manu', age: 29 },
      { id: 'c', name: 'Stephanie', age: 26 }
    ]
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => p.id === id);
    const person = {...this.state.people[personIndex]};
    // const person = Object.assign({}, tis.state.people[personIndex]);
    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;
    this.setState({people: people});
  };

  deletePersonHandler = (personIndex) => {
    // const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people});
  };

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: '#eee',
      font: 'inherit',
      border: 'solid 1px blue',
      padding: '8px'
    };

    let people = null;
    if (this.state.showPeople) {
      people =
        <div>
          {this.state.people.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePeopleHandler}>
          Switch Name
        </button>
        {people}
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m a React App!!!'));
  }
}

export default App;
