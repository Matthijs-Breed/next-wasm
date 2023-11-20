module.exports = {
    webpack: (config) => {
        config.resolve.alias["@/"] = __dirname;
        config.experiments = { syncWebAssembly: true };
        return config;
    },
};