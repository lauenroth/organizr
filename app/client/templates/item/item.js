/*****************************************************************************/
/* Item: Event Handlers */
/*****************************************************************************/
Template.Item.events({
  'click label': function(e) {
    setTimeout(() => {
      if ( $('#' + $(e.currentTarget).prop('for')).is(':checked') ) {
        Items.update({_id: this._id}, {$set: {done: true} });
      }
    }, 800);

  }
});

/*****************************************************************************/
/* Item: Helpers */
/*****************************************************************************/
Template.Item.helpers({
});

/*****************************************************************************/
/* Item: Lifecycle Hooks */
/*****************************************************************************/
Template.Item.onCreated(function () {
});

Template.Item.onRendered(function () {
});

Template.Item.onDestroyed(function () {
});
