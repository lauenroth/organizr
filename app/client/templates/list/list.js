Meteor.subscribe('lists');

/*****************************************************************************/
/* List: Event Handlers */
/*****************************************************************************/
Template.List.events({
});

/*****************************************************************************/
/* List: Helpers */
/*****************************************************************************/
Template.List.helpers({

  hasItems: function() {
    let list = Session.get('currentList');
    if (list) {
      return Items.find({list: list._id, done : {$exists: false} }).fetch().length > 0;
    }
  },

  items: function() {
    let list = Session.get('currentList');
    if (list) {
      return Items.find({list: list._id, done : {$exists: false} });
    }
  },

});

/*****************************************************************************/
/* List: Lifecycle Hooks */
/*****************************************************************************/
Template.List.onCreated(function () {
});

Template.List.onRendered(function () {
});

Template.List.onDestroyed(function () {
});
