/*****************************************************************************/
/* Header: Event Handlers */
/*****************************************************************************/
Template.Header.events({
  'click .icon': function(e) {
    if (!$(e.currentTarget).hasClass('close-it')) {
      $('body').addClass('show-menu');
    }
    else {
      Template.AddItem.close();
    }
	},
});

/*****************************************************************************/
/* Header: Helpers */
/*****************************************************************************/
Template.Header.helpers({

  title: function() {
    if (!Session.get('title')) {
      Session.set('title', 'Organizr');
    }
    return Session.get('title');
  },

  tempTitle: function() {
    return Session.get('tempTitle');
  },

});

/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/
Template.Header.onCreated(function () {
});

Template.Header.onRendered(function () {
});

Template.Header.onDestroyed(function () {
});
