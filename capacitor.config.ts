import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ashi.cashew',
  appName: 'Cashew',
  webDir: 'dist', // Vite builds to 'dist' by default
  bundledWebRuntime: false
};

export default config;
