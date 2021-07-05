const defaultConfig = {
  $vue: null,
  router: null,
  settings: {},
  enabledRoutes: [],
};

let config = { ...defaultConfig };

export function update (params) {
  Object.keys(params).forEach(function (key) {
    config[key] = params[key];
  });
}

export default config;
