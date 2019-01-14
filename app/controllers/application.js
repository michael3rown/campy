import Controller from '@ember/controller';

export default Controller.extend({
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
        this.transitionToRoute('detail', newRecord);
      });
    },
    onModalHidden() {
      this.set('modal', false);
    },
    navToggle() {
      let mobileMenu = document.getElementById('aside');
      
      mobileMenu.classList.toggle('asideShow');
    }
  }
});