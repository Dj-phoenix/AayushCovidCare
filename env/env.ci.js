const path = require('path');

module.exports = {
  ENV: 'ci',
  UI_KITTEN_PACKAGES_PATH: path.resolve(__dirname, '../packages-ci/react-native-ui-kitten/src'),
  EVA_PACKAGES_PATH: path.resolve(__dirname, '../packages-ci/eva/packages'),
};
