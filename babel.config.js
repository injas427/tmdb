module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@src': './src',
          '@screens': "./src/screens",
          '@theme': "./src/theme",
          '@images': "./src/assets/images",
          '@constants': "./src/constants",
        },
      },
    ],
  ]
};
