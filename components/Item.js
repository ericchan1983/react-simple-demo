/**
 * Created by ericchen on 16-1-20.
 */
import React, {Component, PropTypes} from 'react';


export default class Item extends React.Component {
    static propTypes = {
        item: PropTypes.shape({
            attributeKey : PropTypes.string.isRequired,
            displayName: PropTypes.string.isRequired,
            dataType: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    }

    render() {
        return (
            <div className="item" style={{ height:'20px'}}>
                <div style={{float: 'left'}}>
                    {this.props.item.displayName}
                </div>
                <div style={{float: 'right'}}>
                    {this.props.item.dataType}
                </div>
            </div>
        );
    }
}