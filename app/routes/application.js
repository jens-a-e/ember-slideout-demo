import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      type: "plan",
      id: "1",
      attributes: {
        name: "test"
      }
    });
      // return this.store.findAll('plan');
  }
});