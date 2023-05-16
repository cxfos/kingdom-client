import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*stories.@(js|jsx|ts|tsx)"],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    previewMdx2: true,
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {

    config?.resolve && (config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config?.resolve?.extensions,
      }),
    ]);

    config?.resolve && (config.resolve.alias = {
      ...config.resolve.alias,
      'components': path.resolve(__dirname, 'src/components/'),
      'pages': path.resolve(__dirname, '../src/pages/'),
      'styles': path.resolve(__dirname, '../src/styles/'),
      'utils': path.resolve(__dirname, '../src/utils/'),
    });

    return config;
  },
};

export default config;
