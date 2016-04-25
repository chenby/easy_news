import "./public/js/swiper.min.css"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import "./dist/main.css";

import Swiper from "./public/js/swiper-3.3.1.min.js"
import "./public/js/swiper.js"

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
