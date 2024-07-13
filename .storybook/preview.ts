import type { Preview } from "@storybook/react";
import theme from "./theme";

import "../src/app.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Getting Started",
          "Changelog",
          "Typography",
          "Layouts",
          "Components",
        ],
      },
    },
    docs: { theme },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
