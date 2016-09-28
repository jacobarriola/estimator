import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {title: "Task 1"},
      {title: "Task 2"},
      {title: "Task 3"}
    ];
  },
});
