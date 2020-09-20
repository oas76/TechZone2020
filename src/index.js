import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import CiscoSansRegular from './fonts/CiscoSansRegular.otf';
import CiscoSansBold from './fonts/CiscoSansBold.otf';
import CiscoSansHeavy from './fonts/CiscoSansHeavy.otf';
createGlobalStyle`
    @font-face {
        font-family: 'CiscoSans';
        src: url(${CiscoSansRegular}) format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'CiscoSansHeavy';
        src: url(${CiscoSansHeavy}) format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    * {
        font-family: 'CiscoSans', sans-serif;
    }
`;

ReactDOM.render(

  <React.StrictMode>

        <App />

  </React.StrictMode>,
  document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
