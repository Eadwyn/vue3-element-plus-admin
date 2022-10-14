/**
 * 采用window.sessionStorage
 */
const SessionStorageUtil = {
  /**
   * 设置指定key的缓存
   *
   * @param key key
   * @param value value
   */
  set(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * 获取指定key的缓存
   *
   * @param key key
   * @returns value
   */
  get(key: string) {
    const json: any = window.sessionStorage.getItem(key);
    return JSON.parse(json);
  },

  /**
   * 移除指定key的缓存
   *
   * @param key key
   */
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  },

  /**
   * 移除全部缓存
   */
  clear() {
    window.sessionStorage.clear();
  },
};

export default SessionStorageUtil;
