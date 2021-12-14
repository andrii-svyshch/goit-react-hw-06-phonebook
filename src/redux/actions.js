import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts.Add',
  (name, number) => {
    return { payload: { name, number, id: uuidv4() } };
  },
);

export const deleteContact = createAction(
  'contacts/Delete',
);

export const filterContact = createAction(
  'contacts/Filter',
);
