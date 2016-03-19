/*****************************************************************************/
/* Today: Event Handlers */
/*****************************************************************************/
Template.Today.events({
});

Template.Today.Items = function() {
  let today = {
    start: moment().startOf('day').toDate(),
    end: moment().endOf('day').toDate(),
  };

  return Items.find({owner: Meteor.userId(), date: {$gte: today.start, $lte: today.end}, done : {$exists: false}}, {sort: {date: 1} });
}

/*****************************************************************************/
/* Today: Helpers */
/*****************************************************************************/
Template.Today.helpers({

  hasItems: function() {
    return Template.Today.Items().fetch().length;
  },

  items: function() {
    return Template.Today.Items();
  }

});

/*****************************************************************************/
/* Today: Lifecycle Hooks */
/*****************************************************************************/
Template.Today.onCreated(function () {
});

Template.Today.onRendered(function () {
  Session.set('title', 'Today');
});

Template.Today.onDestroyed(function () {
});
