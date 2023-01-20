module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  // NOTE: これ消したらコンポーネント出てこなくなる
  features: {
    emotionAlias: false,
  },
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    // NOTE: これ消したらエラーになる
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    return config;
  },
};
