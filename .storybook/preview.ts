import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import {withThemeFromJSXProvider} from '@storybook/addon-styling';

import GlobalStyles from '../src/styles/global';
import theme from "../src/styles/theme";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      dark: theme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
};

export default preview;