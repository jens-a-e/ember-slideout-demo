import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),

  setup: Ember.on('init', function() {
    console.log("test");
  }),

  duration: 0,

  loadSelectedPlans: Ember.on('init', function(){
    let plans = this.get('store').filter('plan', (plans) => {
      return true;
    });
    this.set('selectedPlans', plans);
  }),

  foo() {
    alert("bar");
  }
});
