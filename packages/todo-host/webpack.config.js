// const { withModuleFederation } = require('@nrwl/angular/module-federation');
// const config = require('./module-federation.config');
// module.exports = withModuleFederation(config);
//

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
