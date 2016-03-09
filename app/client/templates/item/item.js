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
  },

  'click .card': function(e) {
    const $card = $(e.currentTarget);
    if ($card.hasClass('full')) {
      $card.removeClass('full');
    }
    else {
      $('.card.full').removeClass('full');
      $card.addClass('full');
    }
  },

});

/*****************************************************************************/
/* Item: Helpers */
/*****************************************************************************/
Template.Item.helpers({
  readableDate: function() {
    let date = moment(this.date).calendar();
    let hasTime = date.indexOf(' at');
    if (hasTime > 0) {
      return date.substr(0, hasTime);
    }
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
