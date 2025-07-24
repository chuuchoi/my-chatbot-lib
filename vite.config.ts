import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/Chatbot.tsx'),
      name: 'MyChatbotLib',
      fileName: (format) => `my-chatbot-lib-0.${format}.js`,
    },
    rollupOptions: {
      // 🔥 즉, react/jsx-runtime이 external 처리되지 않고 같이 번들된 겁니다. 이건 Vite 3 이상에서 JSX 사용 시 흔히 발생하는 문제예요.
      // vite.config.ts의 external에는 react/jsx-runtime도 명시적으로 추가해야 해결됩니다.
      external: ['react', 'react-dom', 'react/jsx-runtime'], // ✅ 여기에 추가!
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
});
