import React from 'react';
import Form from './components/Form';

state = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange,
  onSaveButtonClick,
};

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>

        <Form />
      </div>
    );
  }
}

export default App;
