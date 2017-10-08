import React, {Component} from 'react';
import Moment from 'moment';
import 'moment/locale/de';
import 'moment-duration-format';
import './TimesList.css';

class TimesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputFromTime: "",
            inputToTime: "",
            calcDuration: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let newState = {};
        newState[event.target.name] = event.target.value;

        this.setState(newState);
    }

    handleSubmit(event) {
        const {inputFromTime, inputToTime} = this.state;

        const momentFrom = Moment(inputFromTime, "HH:mm").unix();
        const momentTo = Math.max(momentFrom, Moment(inputToTime, "HH:mm").unix()); // no negative duration

        event.preventDefault();
        this.props.onAddNewTime(momentFrom, momentTo);
    }

    calculateDuration(timeEntry) {
        const from = Moment.unix(timeEntry.from);
        const to = Moment.unix(timeEntry.to);
        return {
            from, to,
            duration: Moment.duration(to.diff(from))
        }
    }

    render() {
        return (
            <div className="TimesList">
                <table>
                    <thead>
                    {this.renderListHeader()}
                    </thead>
                    <tbody>
                    {this.renderListItems()}
                    </tbody>
                    <tfoot>
                    {this.renderSummary()}
                    </tfoot>
                </table>
                {this.renderNewEntryForm()}
            </div>
        );
    }

    renderListHeader() {
        return (
            <tr>
                <th>From</th>
                <th>To</th>
                <th className="tight">Duration</th>
            </tr>
        );
    }

    renderListItems() {
        const {times} = this.props;

        if (!times.length) {
            return (
                <tr>
                    <td colSpan="3">
                        <div className="TimeList-emptymessage">No entries yet</div>
                        {this.renderLoading()}</td>
                </tr>
            )
        }

        return times
            .map(this.calculateDuration)
            .map(
                (timeEntry, index) =>
                    <tr key={index} className={index % 2 ? 'even' : 'odd'}>
                        <td>{timeEntry.from.format('HH:mm')}</td>
                        <td>{timeEntry.to.format('HH:mm')}</td>
                        <td>{timeEntry.duration.format('HH:mm')}</td>
                    </tr>
            );
    }

    renderLoading() {
        return this.props.isLoading ? (
            <div className="loading">
                <div className="spinner"></div>
                Loading
            </div> ) : '';
    }

    renderSummary() {
        const {times} = this.props;

        const sum = times
            .map(this.calculateDuration)
            .reduce((sum, timeEntry) => sum.add(timeEntry.duration), Moment.duration(0));

        const summary = times.length ? sum.format('HH:mm') : '-';

        return (
            <tr>
                <th colSpan="2">Summary</th>
                <td className="TimesList-summary">{summary}</td>
            </tr>
        );
    }

    renderNewEntryForm() {
        return (
            <div className="TimesList-form">
                <h3>New Entry</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        From
                    </label>
                    <input name="inputFromTime" value={this.state.inputFromTime} type="time"
                           onChange={this.handleChange}/>
                    <label>
                        To
                    </label>
                    <input name="inputToTime" value={this.state.inputToTime} type="time" onChange={this.handleChange}/>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }

}

TimesList.propTypes = {
    times: React.PropTypes.array.isRequired,
    onAddNewTime: React.PropTypes.func.isRequired
};

export default TimesList;
