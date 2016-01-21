import React, {Component} from 'react';
import SearchBox from './SearchBox'
import ItemList from './ItemList'
import AttributeAction from '../actions/AttributeAction';
import AttributeStore from '../stores/AttributeStore';

function getAppState() {
    return {items: AttributeStore.getFilterAttributes()};
}
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.onStoreChange = this.onStoreChange.bind(this);
    }

    state = getAppState()

    componentDidMount() {
        AttributeStore.addChangeListener(this.onStoreChange);
    }

    componentWillUnmount() {
        AttributeStore.removeChangeListener(this.onStoreChange);
    }

    onStoreChange() {
        this.setState(getAppState());
    }

    onFilter(args) {
        AttributeAction.filterAttributes(args.filterStr);
    }

    render() {
        return (
            <div>
                <h1>React Simple Demo for StuQ</h1>
                <SearchBox onFilter={::this.onFilter}></SearchBox>
                <ItemList items={this.state.items}></ItemList>
            </div>
        );
    }
}
