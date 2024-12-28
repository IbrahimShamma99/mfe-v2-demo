import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    pluginReact(),

    pluginModuleFederation({
      name: "header",
      exposes: {
        "./header": "./src/Header.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
