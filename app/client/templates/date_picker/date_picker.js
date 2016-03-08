/*****************************************************************************/
/* DatePicker: Event Handlers */
/*****************************************************************************/
Template.DatePicker.events({

  'click .date-picker': function() {
    $('.date-picker').removeClass('show');
  },

  'click li': function() {
    $('.date-picker').removeClass('show');
  },

});

/*****************************************************************************/
/* DatePicker: Helpers */
/*****************************************************************************/
Template.DatePicker.helpers({
});

/*****************************************************************************/
/* DatePicker: Lifecycle Hooks */
/*****************************************************************************/
Template.DatePicker.onCreated(function () {
});

Template.DatePicker.onRendered(function () {
});

Template.DatePicker.onDestroyed(function () {
});
