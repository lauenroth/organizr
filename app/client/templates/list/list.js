Meteor.subscribe('lists');

/*****************************************************************************/
/* List: Event Handlers */
/*****************************************************************************/
Template.List.events({

  'click .sub-menu-icon': function() {
    $('body').addClass('show-sub-menu');
  },

  'click .sub-menu li': function() {
    $('body').removeClass('show-sub-menu');
  },

  'click .sub-menu .delete': function() {
    const list = this;
    const itemsInList = Items.find({list: list._id}).fetch();
    confirmDialog('Do you really wanna delete the list' + (itemsInList.length > 0 ? ' and all its items' : '') + '?', function() {
      itemsInList.forEach(item => {
        Items.remove({_id: item._id});
      });
      Lists.remove({_id: list._id});
    });
  },

  'click .sub-menu .toggle-done': function() {
    Session.set('showCompletedTasks', !!!Session.get('showCompletedTasks'));
  }

});

/*****************************************************************************/
/* List: Helpers */
/*****************************************************************************/
Template.List.Items = function() {
  const list = Session.get('currentList');
  if (list) {
    const itemsWithDate = Items.find({list: list._id, owner: Meteor.userId(), done : {$exists: false}, date: {$exists: true} }, {sort: {date: 1} }).fetch();
    const itemsWithoutDate = Items.find({list: list._id, owner: Meteor.userId(), done : {$exists: false}, date: {$exists: false} }).fetch();
    return itemsWithDate.concat(itemsWithoutDate);
  }
}
Template.List.CompletedItems = function() {
  const list = Session.get('currentList');
  if (list) {
    const itemsWithDate = Items.find({list: list._id, owner: Meteor.userId(), done : {$exists: true}, date: {$exists: true} }, {sort: {date: 1} }).fetch();
    const itemsWithoutDate = Items.find({list: list._id, owner: Meteor.userId(), done : {$exists: true}, date: {$exists: false} }).fetch();
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

  hasCompletedItems: function() {
    const items = Template.List.CompletedItems();
    if (items) {
      return items.length > 0;
    }
    return false;
  },

  hasNoItemsAtAll: function() {
    var items = Template.List.Items();
    if (items && items.length > 0) {
      return false;
    }
    items = Template.List.CompletedItems();
    if (items && items.length > 0) {
      return false;
    }
    return true;
  },

  completedItems: function() {
    return Template.List.CompletedItems();
  },

  isSpecialList: function() {
    return this._id === 'inbox';
  },

  showCompletedTasks: function() {
    return !!Session.get('showCompletedTasks');
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
