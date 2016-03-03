/*****************************************************************************/
/* Header: Event Handlers */
/*****************************************************************************/
Template.Header.events({
  'click .icon': function(e) {
		let $icon = $(e.currentTarget);
    if (!$icon.hasClass('close-it')) {
      $('body').addClass('show-menu');
    }
    else {
      $('body').removeClass('add-item');
      $icon.removeClass('close-it');
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
  }
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
