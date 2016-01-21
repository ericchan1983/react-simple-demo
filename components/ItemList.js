/**
 * Created by ericchen on 16-1-20.
 */
import React, {Component, PropTypes} from 'react';
import Item from './Item'

export default class ItemList extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            attributeKey : PropTypes.string.isRequired,
            displayName: PropTypes.string.isRequired,
            dataType: PropTypes.string.isRequired,
            description: PropTypes.string
        }))
    }

    render() {
        return (
            <div className="item-list">
                {this.props.items.map(item => <Item key={item.attributeKey} item={item}></Item> )}
            </div>
        );
    }
}