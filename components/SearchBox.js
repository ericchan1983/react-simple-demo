/**
 * Created by ericchen on 16-1-19.
 */
import React, {Component, PropTypes} from 'react';


const EMPTY_MESSAGE = 'Filter...';

export default class SearchBox extends React.Component {

    static propTypes = {
        onFilter: PropTypes.func.isRequired,
    }

    state = {
        text: EMPTY_MESSAGE,
        showHint: true,
    }

    handleChange(evt) {
        evt.preventDefault();
        this.setState({text: evt.target.value, showHint: false});
        console.log("handle change");
    }

    handleKeyUp() {
        this.props.onFilter({
            filterStr: this.state.text
        })
        console.log("handle Keyup");
    }

    handleFocus() {
        this.setState({text: this.state.showHint ? '' : this.state.text, showHint: false});
        console.log("handle Focus");
    }

    handleBlur() {
        if (this.state.text === '') {
            this.setState({text: EMPTY_MESSAGE, showHint: true});
        } else {
            this.setState({text: this.state.text, showHint: false});
        }
        console.log("handle Blur");
    }

    componentDidMount() {
        if (console) {
            console.log('Component did mount');
        }
        this.refs.filterInput.focus();
    }

    componentWillUnmount() {
        if (console) {
            console.log('Component will un mount');
        }
    }

    shouldComponentUpdate () {
        if (console) {
            console.log("Component should update.");
        }
        return true;
    }

    componentDidUpdate () {
        if (console) {
            console.log("Component did update.");
        }
    }

    componentWillReceiveProps () {
        if (console) {
            console.log("Component will receive props.");
        }
    }

    render() {
        return (
            <div>
                <input ref="filterInput" type="input" className="search-box" value={this.state.text}
                       onKeyUp={::this.handleKeyUp} onChange={::this.handleChange} onFocus={::this.handleFocus}
                       onBlur={::this.handleBlur}/>
            </div>
        );
    }
};