import React from 'react';
import styles from './css/app.css';

const App = (props) => (
    <div className={`${styles.app} container`}>
        <h1>Todoe React</h1>
        {props.children}
    </div>
);

export default App;
