import Component from '@ember/component';

export default Component.extend({
  actions: {
    createCampground() {
      let newCampgroundName = this.get('newCampgroundName');
      // let campgroundId = newCampgroundName.split(' ').map(word => word.charAt(0).toLowerCase() + word.substring(1) ).join('-');
      let newRecord = this.store.createRecord('campground', {
        name: newCampgroundName
      });

      newRecord.save().then(() => {
        this.set('newCampgroundName', '');
      }).then(() => {
        this.set('campgroundForm', false);
      }).then(() => {
        this.transitionToRoute('detail', newRecord);
      });
    }
  }
});
