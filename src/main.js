// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '../node_modules/semantic-ui-css/semantic.min.css';
import semantic from 'semantic';
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import VueApollo from 'vue-apollo';

Vue.config.productionTip = false;

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8999/graphql',
    transportBatching: true,
  }),
  connectToDevTools: true,
  // queryTransformer: addTypename,
  // dataIdFromObject: r => r.id,
});
// Install the vue plugin
Vue.use(VueApollo, {
  apolloClient,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  template: '<App/>',
  components: { App },
});
