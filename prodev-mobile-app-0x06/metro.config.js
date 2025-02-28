const { getDefaultConfig } = require("expo/metro-config");

module.exports = {
  ...getDefaultConfig(__dirname),
  resolver: {
    sourceExts: ["ts", "tsx", "js", "jsx"],
  },
};
