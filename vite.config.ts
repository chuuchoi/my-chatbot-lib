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
      // 🔥 즉, react/jsx-runtime이 external 처리되지 않고 같이 번들된 겁니다.
      // 이건 Vite 3 이상에서 JSX 사용 시 흔히 발생하는 문제예요.
      // vite.config.ts의 external에는 react/jsx-runtime도 명시적으로 추가해야 해결됩니다.
      external: ['react', 'react-dom', 'react/jsx-runtime'], // ✅ 여기에 추가!
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          //빌드 메시지 
          //No name was provided for external module "react/jsx-runtime" in "output.globals" – guessing "jsxRuntime".
          //이건 UMD 번들에서만 생기는 경고이고, ESM에는 영향 없습니다.
          // 만약 UMD도 사용하는 환경이 있다면 globals에 react/jsx-runtime을 명시해주면 경고가 사라집니다:
          'react/jsx-runtime': 'jsxRuntime', // ✅ 이 줄 추가
        },
      },
    },
  },
});
