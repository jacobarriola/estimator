import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		// WP only returns 10 posts, so using query instead of findAll('estimate')
		return this.store.query('estimate', {per_page: 99}).then(estimates => estimates.toArray()); // https://github.com/emberjs/data/issues/3313
    },

	actions: {
		createEstimate() {
		    let store = this.get('store');
		    let title = this.get('controller').get('title');
		    let estimate = store.createRecord('estimate', { 'title': title });
		    estimate.save();
			this.modelFor('estimates').pushObject(estimate);
			this.get('controller').set('title', '');
		}
	}

});
