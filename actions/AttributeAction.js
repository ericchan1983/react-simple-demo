/**
 * Created by ericchen on 16-1-21.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import AttributeConstants from '../constants/AttributeConstants';

export default {

    filterAttributes (filterStr){
        AppDispatcher.dispatch({
            actionType: AttributeConstants.ATTRIBUTE_FILTER,
            filterStr: filterStr
        });
    }
};