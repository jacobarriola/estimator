import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('estimates'); // /estimates
  this.route('estimate', {path: 'estimate/:id'} );
  this.route('notfound', {path: '*path'}); // 404
});

export default Router;
