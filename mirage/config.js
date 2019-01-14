export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.namespace = '/api';

  this.get('/campgrounds');
  this.post('/campgrounds');
  this.get('/campgrounds/:id');
  this.post('/campgrounds/:id');

  /*
  this.get('/campgrounds', function() {
    return {
      data: [{
        type: 'campgrounds',
        id: 'beverly-beach-state-park',
        attributes: {
          name: 'Beverly Beach State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'fort-stevens-state-park',
        attributes: {
          name: 'Fort Stevens State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'silver-falls-state-park',
        attributes: {
          name: 'Silver Falls State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'mazama-village-campground-at-crater-lake-national-park',
        attributes: {
          name: 'Mazama Village Campground at Crater Lake National Park'
        }
      }, {
        type: 'campgrounds',
        id: 'cape-lookout-state-park',
        attributes: {
          name: 'Cape Lookout State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'jessie-m-honeyman-memorial-state-park',
        attributes: {
          name: 'Jessie M. Honeyman Memorial State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'harris-beach-state-park',
        attributes: {
          name: 'Harris Beach State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'tumalo-state-park',
        attributes: {
          name: 'Tumalo State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'diamond-lake',
        attributes: {
          name: 'Diamond Lake'
        }
      }, {
        type: 'campgrounds',
        id: 'nehalem-bay-state-park',
        attributes: {
          name: 'Nehalem Bay State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'smith-rock-state-park',
        attributes: {
          name: 'Smith Rock State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'south-beach-state-park',
        attributes: {
          name: 'South Beach State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'valley-of-the-rogue-state-park',
        attributes: {
          name: 'Valley of the Rogue State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'trillium-lake-campground',
        attributes: {
          name: 'Trillium Lake Campground'
        }
      }, {
        type: 'campgrounds',
        id: 'champoeg-state-park',
        attributes: {
          name: 'Champoeg State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'cove-palisades-state-park',
        attributes: {
          name: 'Cove Palisades State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'barview-jetty-county-campground',
        attributes: {
          name: 'Barview Jetty County Campground'
        }
      }, {
        type: 'campgrounds',
        id: 'humbug-mountain-state-park',
        attributes: {
          name: 'Humbug Mountain State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'bullards-beach-state-park',
        attributes: {
          name: 'Bullards Beach State Park'
        }
      }, {
        type: 'campgrounds',
        id: 'milo-mcIver-state-park',
        attributes: {
          name: 'Milo McIver State Park'
        }
      }]
    };
  });
  */
}