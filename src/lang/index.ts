import { createI18n } from 'vue-i18n';
import LocalStorageUtil from '@/util/LocalStorageUtil';

import zhCN from './zh-CN';
import enUS from './en-US';

const messages = {
  'zh-CN': {
    ...zhCN,
  },
  'en-US': {
    ...enUS,
  },
};

/**
 * 获取用户语言设置
 *
 * @returns 如果LocalStorage有保存语言设置，则返回；
 * 否则尝试返回浏览器使用语言设置；
 * 若尝试失败，则返回简体中文
 */
export const getLanguage = () => {
  LocalStorageUtil.get('language');
  let language = LocalStorageUtil.get('language');
  if (language) {
    return language;
  }

  // 浏览器使用语言
  language = navigator.language.toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }

  return 'zh-CN';
};

const i18n = createI18n({
  locale: getLanguage(),
  fallbackLocale: 'zh-CN',
  messages: messages,
});

export default i18n;
