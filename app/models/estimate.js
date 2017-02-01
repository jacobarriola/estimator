import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string'),
	status: DS.attr('string', { defaultValue: 'publish'}),
	tasks: DS.hasMany('task')
});
