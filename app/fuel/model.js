import DS from 'ember-data';

export default DS.Model.extend({
  fuelType: DS.attr(),
  burnRate: DS.attr(),
  capacity: DS.attr(),
  volume: DS.attr(),
});
