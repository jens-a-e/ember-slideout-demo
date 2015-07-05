import Ember from 'ember';

export default Ember.Controller.extend({
  plans: Ember.inject.service(),

  openSlideOut: false,

  filteredSubscribtions: Ember.computed('model.[]',{
    get() {
      return this.get('model').filter(function() {
        return Math.random() > 0.5;
      });
    }
  }),

  monthly: null,
  annual: null,

  planSelection: "monthly",

  selectedPlans: Ember.computed('planSelection', {
    get() {
      return this.get(this.get('planSelection'));
    }
  }),

  duration: Ember.computed.alias("controllers.application.selectedDuration"),

  theplans: Ember.computed("duration", "model", "model.[]", "model.@each.duration", "model.@each.price", {
      get(){
        let duration = this.get('duration');
        return this.get('model').filter(function(plan) {
          return plan.get('duration') === duration || plan.get('price') === 999;
        });
    }
  }),

  actions: {
    toggleSlideOut() {
      this.toggleProperty('openSlideOut');
    },


    toggleMobile() {
      this.toggleProperty('isMobile');
    }

  }
})