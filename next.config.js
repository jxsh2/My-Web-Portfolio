const compose = require("next-compose-plugins")
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: []
  },
  webpack: (config) => {
    config.resolve.alias["components"] = path.resolve(__dirname, "components")
    config.resolve.alias["actions"] = path.resolve(__dirname, "actions")
    config.resolve.alias["utils"] = path.resolve(__dirname, "utils")
    config.resolve.alias["nextRoutes"] = path.resolve(__dirname, "_routes.js")
    config.resolve.alias["styles"] = path.resolve(__dirname, "styles")
    config.resolve.alias["layout"] = path.resolve(__dirname, "layout");
    config.resolve.alias["strings"] = path.resolve(__dirname, "strings");
    config.resolve.alias["packageJSON"] = path.resolve(__dirname, "package.json");

    return config;
  },
};

module.exports = compose([], nextConfig);