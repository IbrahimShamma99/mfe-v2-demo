import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: "footer",
      exposes: {
        "./footer": "./src/bootstrap.ts",
      },
    }),
  ],
});
