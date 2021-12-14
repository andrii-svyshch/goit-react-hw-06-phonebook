import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  items,
  filter,
});

export default phonebookReducer;
