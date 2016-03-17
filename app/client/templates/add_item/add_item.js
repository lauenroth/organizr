/*****************************************************************************/
/* AddItem: Event Handlers */
/*****************************************************************************/
Template.AddItem.close = function() {
  $('body').removeClass('add-item');
  $('header.main .icon').removeClass('close-it');
  $('#item-description').blur().val('').html('');
  Template.DatePicker.reset();
  Session.set('editItem', false);
};

Template.AddItem.show = function() {
  const isEdit = Session.get('editItem');

  $('body').addClass('add-item');
  $('header.main .icon').addClass('close-it');

  Session.set('tempTitle', isEdit ? 'Edit item' : 'Add item');

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
    const editItem = Session.get('editItem');
    let item = {
      description: $('#item-description').val(),
      list: Session.get('currentList')._id,
    };
    let date = $('.item-date').val();
    switch (date) {
      case 'today': item.date = moment().endOf('day').toDate(); break;
      case 'tomorrow': item.date = moment().add(1, 'day').endOf('day').toDate(); break;
      case 'this-week': item.date = moment().endOf('week').endOf('day').toDate(); break;
      case 'next-week': item.date = moment().add(1, 'week').endOf('week').endOf('day').toDate(); break;
      case 'this-month': item.date = moment().endOf('month').endOf('day').toDate(); break;
      case 'next-month': item.date = moment().add(1, 'month').endOf('month').endOf('day').toDate(); break;
      case '': break;
      default: item.date = moment(date).toDate();
    }
    if (editItem) {
      item.updated = new Date();
      Items.update({_id: editItem._id}, item);
      info('Item has been updated');
    }
    else {
      item.created = new Date();
      Items.insert(item);
      info('Item has been added');
    }

    Template.AddItem.close();
  },

  'click .sub-menu-icon': function() {
    $('body').addClass('show-sub-menu');
  },

  'click .sub-menu li': function() {
    $('body').removeClass('show-sub-menu');
  },

  'click .delete': function() {

    confirmDialog('Do you really wanna delete this item?', function() {
      info('Item has been deleted.');
      Items.remove({_id: Session.get('editItem')._id});
      Template.AddItem.close();
    });
  },

});

/*****************************************************************************/
/* AddItem: Helpers */
/*****************************************************************************/
Template.AddItem.helpers({

  list: function() {
    return Session.get('currentList');
  },

  editItem: function() {
    return Session.get('editItem');
  },

  dateInfo: function(date) {
    return moment(date).fromNow();
  }

});

/*****************************************************************************/
/* AddItem: Lifecycle Hooks */
/*****************************************************************************/
Template.AddItem.onCreated(function () {
});

Template.AddItem.onRendered(function () {
  Session.set('editItem', false);
});

Template.AddItem.onDestroyed(function () {
});
