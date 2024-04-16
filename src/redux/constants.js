import storage from 'redux-persist/lib/storage';

export const contactsPersistConfig = {
  key: 'items',
  storage,
  whitelist: ['items'],
};

export const formikInitialValues = {
  username: '',
  phone: '',
};
