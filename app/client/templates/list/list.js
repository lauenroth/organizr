Meteor.subscribe('lists');

/*****************************************************************************/
/* List: Event Handlers */
/*****************************************************************************/
Template.List.events({
});

/*****************************************************************************/
/* List: Helpers */
/*****************************************************************************/
Template.List.Items = function() {
  let list = Session.get('currentList');
  if (list) {
    return Items.find({list: list._id, done : {$exists: false} }, {$sort: {date: 1} });
  }
}
Template.List.helpers({

  hasItems: function() {
    let items = Template.List.Items();
    if (items) {
      return items.fetch().length > 0;
    }
    return false;
  },

  items: function() {
    return Template.List.Items();
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
