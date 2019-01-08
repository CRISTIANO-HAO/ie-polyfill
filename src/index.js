import _ from 'lodash';
import './css/style.css';
import Icon from './image/logo.svg';
import Data from './xml/data.xml';
import printMe from './js/print.js';

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());