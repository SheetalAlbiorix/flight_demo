module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@root': './',
          '@components': './app/components',
          '@screens': './app/screens',
          '@utils': './app/utils',
          '@hooks': './app/hooks',
          '@services': './app/services',
          '@assets': './app/assets',
          '@navigation': './app/navigation',
          '@config/*': ['app/config/*'],
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
