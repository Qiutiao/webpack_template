import {debug} from './base';
import list from '../testjson';
// import list from '../testcsv.csv';
import '../css/main.css';
import src from '../img/img_01.jpg'

if(debug) {
  console.log('debug is open');
};

const symbol = document.querySelector('symbol');
list.forEach(temp => {
  let a = document.createElement('a');

  if(!temp.title){
    return
  };

  a.innerText = temp.title;
  a.href = temp.url;
  symbol.appendChild(a);
});

let img = document.createElement('img');
img.src = src;
document.body.appendChild(img);
