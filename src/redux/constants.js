import storage from 'redux-persist/lib/storage';

export const contactsPersistConfig = {
  key: 'contact-list',
  storage,
};

export const formikInitialValues = {
  username: '',
  phone: '',
};