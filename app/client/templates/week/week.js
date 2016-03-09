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

  return Items.find({date: {$gte: week.start, $lt: week.end}});
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
