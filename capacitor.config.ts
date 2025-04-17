import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'My App',
  webDir: 'out',
  server: {
    url: 'http://192.168.1.15:3000', // Twój adres IP z `ipconfig`
    cleartext: true
  }
};

export default config;
