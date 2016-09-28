import Ember from 'ember';

export default Ember.Route.extend({

  favorites: Ember.inject.service(),

  model() {
    return [
      {title: "30-day-transformation"},
      {title: "fragd"},
      {title: "fashion-style-mag"}
    ];
  },

  actions: {
    favoriteClicked(estimate) {
      this.get('favorites').favoriteItem(estimate);
    },
    createEstimate() {
      console.log('clicked');
    }
  }

});
