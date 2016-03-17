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
  const list = Session.get('currentList');
  if (list) {
    const itemsWithDate = Items.find({list: list._id, done : {$exists: false}, date: {$exists: true} }, {sort: {date: 1} }).fetch();
    const itemsWithoutDate = Items.find({list: list._id, done : {$exists: false}, date: {$exists: false} }).fetch();
    return itemsWithDate.concat(itemsWithoutDate);
  }
}
Template.List.helpers({

  hasItems: function() {
    const items = Template.List.Items();
    if (items) {
      return items.length > 0;
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
