import React, {Component} from 'react';
import Header from './Header/Header';
import TimesList from '../containers/Times';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title="Timetracker"/>
                <section className="App-content">
                    <TimesList/>
                </section>
            </div>
        );
    }
}

export default App;
