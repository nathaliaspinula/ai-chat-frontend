
const dependencies = require("../package.json").dependencies;

const config = {
  name: "AIChat",
  filename: "remoteEntry.js",
  shared: {
    react: {
      eager: true,
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      eager: true,
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: dependencies["react-router-dom"],
    },    
    "@emotion/react": {
      singleton: true, 
      requiredVersion: dependencies["@emotion/react"]
    },
    "@emotion/styled": {
      singleton: true,
      requiredVersion: dependencies["@emotion/styled"]
    },
    "recoil": {
      singleton: true,
      requiredVersion: dependencies["recoil"]
    },
    "react-intl": {
      singleton: true,
      requiredVersion: dependencies["react-intl"]
    },
  },
}

module.exports = config;
