import React from 'react';
import ReactDom from 'react-dom';
import MainApp from './src/MainApp';

const App = () => {
    return (
        <MainApp />
    );
};

ReactDom.render(<App />, document.getElementById('app'));