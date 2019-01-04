import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './reducer'
import { Display } from '../components/display';
import { onBtnClickHandlerAction } from './action';
import { catchAction } from './saga';

class MarvelApp extends Component{
    render(){
        let { images, onBtnClickHandler, userName } = this.props;
        console.log(this.props);
        return(
            <Display 
            imageHref={images}
            onBtnClickHandler={onBtnClickHandler}
            userName={userName}
            />
        )
    }
}

const mapStateToProps = state => ({...state});

const mapDispatchToProps = dispatch => ({
    onBtnClickHandler: () => dispatch(onBtnClickHandlerAction())
});

const Container = connect(mapStateToProps, mapDispatchToProps)(MarvelApp);

const sagaMiddleware = createSagaMiddleware();

const store = createStore( reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(catchAction);

export class AppData extends Component{
    render(){
        return(
            <Provider store={store}>
                <Container />
            </Provider>
        )
    }
}
