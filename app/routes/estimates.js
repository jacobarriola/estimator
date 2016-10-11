import Ember from 'ember';

export default Ember.Route.extend({

	model() {
	    // return [
	    //     {title: "30-day-transformation"},
	    //     {title: "fragd"},
	    //     {title: "fashion-style-mag"}
	    // ];
		return this.store.findAll('estimate').then(estimates => estimates.toArray()); // https://github.com/emberjs/data/issues/3313
    },

	actions: {
		createEstimate() {
	    var store = this.get('store');
	    var title = this.get('controller').get('title');
	    var estimate = store.createRecord('estimate', {
	    	'title': title
	    });
			estimate.save();

		  this.modelFor('estimates').pushObject(estimate);
			this.get('controller').set('title', '');
		}
	}

});
