import { combineReducers } from 'redux';

import Times from './Times';
import {genericListReducerFactory} from "./GenericListReducer";
import {TIME_ADD} from "../actions/TimeActions";

export default combineReducers({
    Times,
    Times2: genericListReducerFactory(TIME_ADD),
})