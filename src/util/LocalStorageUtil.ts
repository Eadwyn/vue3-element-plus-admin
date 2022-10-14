/**
 * 采用window.localStorage
 */
const LocalStorageUtil = {
  /**
   * 设置指定key的缓存
   *
   * @param key key
   * @param value value
   */
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  /**
   * 获取指定key的缓存
   *
   * @param key key
   * @returns value
   */
  get(key: string) {
    const json: any = window.localStorage.getItem(key);
    return JSON.parse(json);
  },

  /**
   * 移除指定key的缓存
   *
   * @param key key
   */
  remove(key: string) {
    window.localStorage.removeItem(key);
  },

  /**
   * 移除全部缓存
   */
  clear() {
    window.localStorage.clear();
  },
};

export default LocalStorageUtil;
