import { header } from './src/layout/header';
import { table } from './src/layout/table';
import { todo } from './src/pages/product';
// import { todo } from './src/pages/product';
import './src/styles/index.css';

document.querySelector('#app').append(todo());
