/*****************************************************************************/
/* Week: Event Handlers */
/*****************************************************************************/
Template.Week.events({
});

Template.Week.Items = function() {
  let week = {
    start: moment().startOf('day').toDate(),
    end: moment().add(7, 'days').endOf('day').toDate(),
  };

  return Items.find({owner: Meteor.userId(), date: {$gte: week.start, $lt: week.end}, done : {$exists: false}}, {sort: {date: 1}});
}

/*****************************************************************************/
/* Week: Helpers */
/*****************************************************************************/
Template.Week.helpers({

  hasItems: function() {
    return Template.Week.Items().fetch().length;
  },

  items: function() {
    return Template.Week.Items();
  }

});

/*****************************************************************************/
/* Week: Lifecycle Hooks */
/*****************************************************************************/
Template.Week.onCreated(function () {
});

Template.Week.onRendered(function () {
  Session.set('title', 'Next 7 days');
});

Template.Week.onDestroyed(function () {
});
