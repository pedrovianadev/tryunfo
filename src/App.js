import React from 'react';
import { bool, func } from 'prop-types';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: bool,
    hasTrunfo: bool,
    isSaveButtonDisabled: bool,
    onInputChange: func,
    onSaveButtonClick: func,
  };

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>

        <Form { ...this.state } />
        <Card />
      </div>
    );
  }
}

export default App;
