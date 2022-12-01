import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="text">
          Nome da carta:
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor='textarea'>
          Descrição da carta:
          <input type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor='number'>
          Atributo 1:
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor='number'>
          Atributo 2:
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor='number'>
          Atributo 3:
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor='text'>
          Caminho da imagem da carta:
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor='select'>
          Raridade da carta:
          <select type="select" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor='checkbox'>
          Esta carta é super trunfo?
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
