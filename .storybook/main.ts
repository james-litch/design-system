import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "@whitespace/storybook-addon-html",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push((await import("@tailwindcss/vite")).default());
    config.plugins.push((await import("vite-plugin-svgr")).default());
    config.plugins.push((await import("vite-tsconfig-paths")).default());

    return config;
  },
};
export default config;
