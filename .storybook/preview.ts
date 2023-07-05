import type { Preview } from "@storybook/react";
import { theme } from "../src/domain/theme";

import "@fontsource/nunito/latin.css";

const preview: Preview = {
  parameters: {
    chakra: {
      theme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "centered",
  },
};

export default preview;
