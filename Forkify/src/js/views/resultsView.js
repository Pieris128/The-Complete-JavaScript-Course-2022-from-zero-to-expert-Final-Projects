import icons from 'url:../../img/icons.svg'; //Parcel 2
//Importando parent class for views
import View from './View.js';
import previewView from './previewView.js'; //Child class

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipies found for your query! Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
