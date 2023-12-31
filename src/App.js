import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateInputs);
  };

  validateInputs = () => {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare } = this.state;

    const sumAttr = 210;
    const maxAttr = 90;
    const minAttr = 0;

    const attrValidate = Number(cardAttr1) <= maxAttr && Number(cardAttr1) >= minAttr
      && Number(cardAttr2) <= maxAttr && Number(cardAttr2) >= minAttr
      && Number(cardAttr3) <= maxAttr && Number(cardAttr3) >= minAttr;

    const sumValidate = Number(cardAttr1)
     + Number(cardAttr2)
      + Number(cardAttr3) <= sumAttr;

    const nameValidate = cardName.length > 0;
    const imgValidate = cardImage.length > 0;
    const descriptionValidate = cardDescription.length > 0;
    const rareValidate = cardRare.length > 0;

    this.setState({
      isSaveButtonDisabled: !(attrValidate
          && sumValidate
          && nameValidate
          && imgValidate
          && descriptionValidate
          && rareValidate),
    });
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const newE = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardTrunfo,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      hasTrunfo: false,
    };

    this.setState(({ cards }) => ({
      cards: [...cards, newE],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    }));
    if (cardTrunfo) {
      this.setState(() => ({
        hasTrunfo: true,
      }));
    }
  };

  render() {
    const { cards } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>

        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <div>
          {cards.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
