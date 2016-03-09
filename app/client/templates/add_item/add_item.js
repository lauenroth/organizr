/*****************************************************************************/
/* AddItem: Event Handlers */
/*****************************************************************************/
Template.AddItem.close = function() {
  $('body').removeClass('add-item');
  $('.date-picker').removeClass('show');
  $('header.main .icon').removeClass('close-it');
  $('#item-description').blur().val('').html('');
};

Template.AddItem.show = function() {
  $('body').addClass('add-item');
  $('header.main .icon').addClass('close-it');
};

Template.AddItem.events({

  'click textarea': function() {
    Template.AddItem.show();
  },

  'click .date': function() {
    $('.date-picker').addClass('show');
    Template.AddItem.show();
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
      created: new Date(),
    };
    let date = $('.item-date').val();
    switch (date) {
      case 'today': item.date = moment().endOf('day').toDate(); break;
      case 'tomorrow': item.date = moment().add(1, 'day').endOf('day').toDate(); break;
      case 'this-week': item.date = moment().endOf('week').endOf('day').toDate(); break;
      case 'next-week': item.date = moment().add(1, 'week').endOf('week').endOf('day').toDate(); break;
      case 'this-month': item.date = moment().endOf('month').endOf('day').toDate(); break;
      case 'next-month': item.date = moment().add(1, 'month').endOf('month').endOf('day').toDate(); break;
    }
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

  isEdit: function() {
    return Session.get('editItem');
  }

});

/*****************************************************************************/
/* AddItem: Lifecycle Hooks */
/*****************************************************************************/
Template.AddItem.onCreated(function () {
});

Template.AddItem.onRendered(function () {
});

Template.AddItem.onDestroyed(function () {
});
