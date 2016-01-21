/**
 * Created by ericchen on 16-1-20.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AttributeConstants from '../constants/AttributeConstants';

const _attributes = {};
let filterStr = '';

function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function addAttribute(displayName, dataType) {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _attributes[id] = {
        attributeKey: id,
        displayName: displayName,
        dataType: dataType,
        description: ''
    };
    return _attributes[id];
}

function setFilterStr(str) {
    filterStr = str.trim();
}

addAttribute('Key', 'String');
addAttribute('Name', 'String');
addAttribute('Age', 'Numeric');
addAttribute('Sex', 'Eum');
addAttribute('Height', 'Numeric');

const AttributeStore = Object.assign({}, EventEmitter.prototype, {

    getFilterAttributes () {
        const filteredArray = [];
        const regExpr = new RegExp(escapeRegExp(filterStr), 'i');
        for (const id in _attributes) {
            const attr = _attributes[id];
            if (filterStr) {
                if (regExpr.test(attr.displayName)) {
                    filteredArray.push(attr);
                }
            } else {
                filteredArray.push(attr);
            }
        }
        return filteredArray;
    },

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    },

    emitChange() {
        this.emit('change');
    }

});

AppDispatcher.register(action => {
    switch (action.actionType) {
        case AttributeConstants.ATTRIBUTE_FILTER:
            setFilterStr(action.filterStr);
            AttributeStore.emitChange();
            break;
        default:
            break;
    }
});

export default AttributeStore;