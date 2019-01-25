import Component from '@ember/component';

export default Component.extend({
  actions: {
    navToggle() {
      let mobileMenu = document.getElementById('aside');
      mobileMenu.classList.toggle('asideShow');
      //set(aside, 'asideShow', !asideShow);
    }
  }
});