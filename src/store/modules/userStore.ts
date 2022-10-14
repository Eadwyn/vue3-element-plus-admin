import { defineStore } from 'pinia';

const userStore = defineStore({
  id: 'UserStore',
  state: (): UserState => ({
    openId: '',
    nickname: '',
    avatar: '',
  }),
  actions: {
    /**
     *  获取用户信息
     */
    getUser() {
      return new Promise((resolve) => {
        resolve(this.$state);
      });
    },

    updateUser(state: UserState) {
      this.openId = state.openId;
      this.nickname = state.nickname;
      this.avatar = state.avatar;
    },
  },
});

export interface UserState {
  openId: string;
  nickname: string;
  avatar: string;
}

export default userStore;
