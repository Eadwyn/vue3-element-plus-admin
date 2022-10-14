import userStore from './modules/userStore';

const store = () => ({
  userStore: userStore(),
});

export default store;
