/*****************************************************************************/
/* Item: Event Handlers */
/*****************************************************************************/
Template.Item.events({

  'click label': function(e) {

    setTimeout(() => {
      const isDone = $('#' + $(e.target).prop('for')).is(':checked');
      if (isDone) {
        Items.update({_id: this._id}, {$set: {done: true} });
      }
      else {
        Items.update({_id: this._id}, {$unset: {done: ''} });
      }
    }, 800);
  },

  'click .card': function(e) {
    const $target = $(e.target);

    // show details / edit form when use did not click the checkbox
    if (!$target.prop('for') && !$target.prop('type')) {
      Session.set('editItem', this);
      Template.AddItem.show();
    }
  },

  'click img.edit': function(e) {
    e.preventDefault();
    const $card = $(e.target).parent();
    const canEdit = !$card.hasClass('edit');

    Session.set('editItem', canEdit ? this._id : null);
    $card.find('.description').prop('readonly', !canEdit);
    $card.toggleClass('edit');
  },

});

/*****************************************************************************/
/* Item: Helpers */
/*****************************************************************************/
Template.Item.helpers({

  isDue: function() {
    return moment(this.date).diff(moment(), 'days') < 0;
  },

  isChecked: function() {
    return this.done === true ? 'checked' : '';
  },

  readableDate: function() {

    let date = moment(this.date);

    switch (this.dateAccuracy) {

      case 'day':
        const dayDifference = date.diff(moment(), 'days');
        switch (dayDifference) {
          case -1: return 'Yesterday'; break;
          case 0: return 'Today'; break;
          case 1: return 'Tomorrow'; break;
          default:
            if (dayDifference > -4 && dayDifference <= 7) return date.fromNow();
            return date.calendar();
        }
        break;
      case 'week':
        const weekDifference = date.diff(moment(), 'weeks');
        switch(weekDifference) {
          case -1: return 'Last week'; break;
          case 0: return 'This week'; break;
          case 1: return 'Next week'; break;
          default:
            if (weekDifference > -2 && weekDifference <= 2) return date.fromNow();
            return date.calendar();
        }
        break;
      case 'month':
        const monthDifference = date.diff(moment(), 'months');
        switch(monthDifference) {
          case -1: return 'Last month'; break;
          case 0: return 'This month'; break;
          case 1: return 'Next month'; break;
          default:
            if (monthDifference > -2 && monthDifference <= 2) return date.fromNow();
            return date.calendar();
        }
        break;
    }


    // let date = moment(this.date).calendar();
    //
    // console.log(date);
    // let hasTime = date.indexOf(' at');
    // if (hasTime > 0) {
    //   // return date.substr(0, hasTime);
    // }
    return date;
  }
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
