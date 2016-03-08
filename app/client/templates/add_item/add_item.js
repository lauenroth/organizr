/*****************************************************************************/
/* AddItem: Event Handlers */
/*****************************************************************************/
Template.AddItem.close = function() {
  $('body').removeClass('add-item');
  $('header.main .icon').removeClass('close-it');
  $('#item-description').blur().val('').html('');
  $('.date-picker').removeClass('show');
};

Template.AddItem.events({

  'click textarea': function() {
    $('body').addClass('add-item');
    $('header.main .icon').addClass('close-it');
  },

  'click .date': function() {
    $('.date-picker').addClass('show');
  },

  'click .close': function() {
    Template.AddItem.close();
  },

  'keydown textarea': function(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      $('#add-item').submit();
    }
  },

  'submit form': function(e) {
    e.preventDefault();
    let item = {
      description: $('#item-description').val(),
      list: Session.get('currentList')._id,
    };
    Items.insert(item);
    Template.AddItem.close();
  },

});

/*****************************************************************************/
/* AddItem: Helpers */
/*****************************************************************************/
Template.AddItem.helpers({

  list: function() {
    return Session.get('currentList');
  },

});

/*****************************************************************************/
/* AddItem: Lifecycle Hooks */
/*****************************************************************************/
Template.AddItem.onCreated(function () {
  $('#add-item').top('')
});

Template.AddItem.onRendered(function () {
});

Template.AddItem.onDestroyed(function () {
});
