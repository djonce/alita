import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'h5',
  // 这个值在 appts 中被 getKeepAlive 修改
  keepalive: [/./],
  // presets: ['@kmijs/preset-bundler'],
  // Enable Rspack
  // rspack: {},
  mobileLayout: true,
  legacyBuild: false,
  // mainPath:'users',
  mfsu: false,
  hash: false,
  reactRouter5Compat: {},
  exportStatic: {},
});
