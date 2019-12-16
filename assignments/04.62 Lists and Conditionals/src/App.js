import React, { Component } from 'react';
import ValidationComponent from './Validation/ValidationComponent';
import CharComponent from './Char/CharComponent';
import './App.css';

class App extends Component {
  state = {
    inputText: '',
    chars: []
  };

  inputChangeHandler = event => {
    this.setState({
      inputText: event.target.value,
      chars: [...event.target.value]
    });
  };

  charClickHandler = index => {
    let value = this.state.inputText;
    value = value.substr(0, index) + value.substr(index + 1);
    this.setState({
      inputText: value,
      chars: [...value]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="instructions">
          <ol>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        </div>
        <div>
          <label htmlFor="input">Input:</label>
          <input id="input" type="text" value={this.state.inputText} onChange={this.inputChangeHandler}/>
        </div>
        <div>
          <label htmlFor="input-length">Length:</label>
          <input id="input-length" type="number" readOnly value={this.state.inputText.length}/>
        </div>
        <ValidationComponent valueLength={this.state.inputText.length} minimumLength={5}/>
        {this.state.chars.map((c, i) => (<CharComponent key={i} char={c} index={i} clicked={() => this.charClickHandler(i)}/>))}
      </div>
    );
  }
}

export default App;
