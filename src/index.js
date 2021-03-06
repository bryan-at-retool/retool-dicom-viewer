/*global Retool*/
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import WebFontLoader from 'webfontloader'
import {Provider} from 'react-redux'
import store from './store'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
})

//store.subscribe(() => console.log('store updated:', store.getState()));

const theme = createTheme({
    overrides: {
        MuiFormControlLabel: {
            label: {
                fontSize: '0.85em'
            },
        },
        MuiFormLabel: {
            root: { 
                '&$focused': {
                    color:'#CCCCCC',
                },   
            }
         
        }
    },
    palette: {
        primary: {
            main: '#004d40',
        },
        secondary: {
            main: '#888888',
        },
        type: 'dark',
    },
  })


  console.log('hello')
const RetoolConnectedComponent = Retool.connectReactComponent(App);
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme = { theme }>
            <RetoolConnectedComponent />
        </MuiThemeProvider>
    </Provider>, 
    document.body.appendChild(document.createElement('div')) 
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register()
 