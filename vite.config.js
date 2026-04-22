import {defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import {readFileSync} from "fs";
import fs from "fs";
import replace from "@rollup/plugin-replace";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      vue(),
      Components({
        dirs: ["src"], // 👈 scan entire src

        deep: true, // include subfolders
        extensions: ["vue"],
        dts: "src/components.d.ts",
      }),

      AutoImport({
        imports: ["vue", "vue-router"],
        deep: true,
        dts: "src/auto-imports.d.ts",
      }),

      tailwindcss(),
      replace({
        preventAssignment: true,
        values: {
          "%VITE_APP_FIREBASE_API_KEY%": JSON.stringify(env.VITE_APP_FIREBASE_API_KEY),
          "%VITE_APP_FIREBASE_AUTH_DOMAIN%": JSON.stringify(env.VITE_APP_FIREBASE_AUTH_DOMAIN),
          "%VITE_APP_FIREBASE_PROJECT_ID%": JSON.stringify(env.VITE_APP_FIREBASE_PROJECT_ID),
          "%VITE_APP_FIREBASE_STORAGE_BUCKET%": JSON.stringify(env.VITE_APP_FIREBASE_STORAGE_BUCKET),
          "%VITE_APP_FIREBASE_MESSAGING_SENDER_ID%": JSON.stringify(env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID),
          "%VITE_APP_FIREBASE_APP_ID%": JSON.stringify(env.VITE_APP_FIREBASE_APP_ID),
        },
      }),
    ],
    server: {
    host: true, // or true for all
      port: 5174,
      https: {
        key: fs.readFileSync("./certs/localhost+2-key.pem"),
        cert: fs.readFileSync("./certs/localhost+2.pem"),
      },
      headers: {
        "Service-Worker-Allowed": "/",
        "Service-Worker": "script",
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
