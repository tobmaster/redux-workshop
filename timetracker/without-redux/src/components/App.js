import React, {Component} from 'react';
import Header from './Header/Header';
import TimesList from './TimesList/TimesList';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            times: [
                {
                    "from": 1489731685,
                    "to": 1489765730
                },
                {
                    "from": 1489751685,
                    "to": 1489775730
                },
                {
                    "from": 1489743685,
                    "to": 1489772730
                }
            ]
        };
    }

    render() {
        return (
            <div className="App">
                <Header title="Timetracker"/>
                <section className="App-content">
                    <TimesList times={this.state.times} onAddNewTime={this.onAddNewTime.bind(this)}/>
                </section>
            </div>
        );
    }

    onAddNewTime(from, to) {
        this.setState({
            times: [
                ...this.state.times,
                {from, to}
            ]
        });
    }
}

export default App;
