import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  _plans: Ember.inject.service('plans'),

  plans: Ember.computed.alias('_plans.selectedPlans'),

  slideout: null,
  classNames: ['so-menu'],
  isOpen: false,
  panel: "panel",

  setupSlideOut: Ember.on('didInsertElement', function() {
    this.teardownSlideOut();
    let panel = `.${this.get('panel')}`;
    let so = new Slideout({
      panel: Ember.$(panel)[0],
      menu: Ember.$('.so-menu')[0],
    });
    this.set('slideout', so);
  }),

  teardownSlideOut: Ember.on('willDestroyElement', function() {
    if (!Ember.isNone(this.get('slideout'))) {
      delete this.get('slideout');
      this.set('slideout', null);
    }
  }),


  handleToggle: Ember.observer('isOpen', function() {
    let so = this.get('slideout');
    if (Ember.isNone(so)) {
      return;
    }
    if (this.get('isOpen')) {
      so.open();
    } else {
      so.close();
    }
  }),

  actions: {
    toggleSlideOut() {
      this.get('plans').foo();
      this.toggleProperty('isOpen');
    },

    test() {
          this.get('store').createRecord('plan', {
            name: "another test"
          })
    }
  }

});
