import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    ignorePatterns: ["apps/**", "packages/**", "node_modules/**"],
  },
  lint: {
    ignorePatterns: ["apps/**", "packages/**", "node_modules/**"],
    options: { typeAware: true, typeCheck: true },
  },
  run: {
    cache: true,
  },
});
