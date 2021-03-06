import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  duration: DS.attr('string'),
  estimate: DS.belongsTo('estimate')
});
