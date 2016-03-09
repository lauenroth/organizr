/*****************************************************************************/
/* DatePicker: Event Handlers */
/*****************************************************************************/
Template.DatePicker.events({

  'click .date-picker': function() {
    $('.date-picker').removeClass('show');
  },

  'click li': function(e) {
    let $date = $(e.target);
    let date = $date.attr('class');
    $('.item-date').val(date);
    if (date) {
      $('.item-date-info').html($date.html()).addClass('show');
    }
    else {
      $('.item-date-info').html('').removeClass('show');
    }

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
