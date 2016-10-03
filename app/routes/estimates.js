import Ember from 'ember';

export default Ember.Route.extend({

	model() {
	    return [
	        {title: "30-day-transformation"},
	        {title: "fragd"},
	        {title: "fashion-style-mag"}
	    ];
    },

	actions: {
		createEstimate() {
		    var store = this.get('store');
		    var title = this.get('controller').get('title');
		    var estimate = store.createRecord('estimate',{title: title});

		    this.modelFor('estimates').pushObject(estimate);
			this.get('controller').set('title', '');
		}
	}

});
