import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { UserConfig, ConfigEnv, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd()); // 获取 .env 环境配置文件

  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], // 指定icons路径
        symbolId: 'icon-[dir]-[name]', // symbolId格式
      }),
    ],
    // 使用本地反向代理欺骗浏览器，使其误认为是同源请求；
    server: {
      host: 'localhost',
      port: Number(env.VITE_APP_PORT),
      open: true, // 启动时是否自动打开浏览器
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://localhost:8888', // 修改为实际的domain
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
  };
};
