/*****************************************************************************/
/* Profile: Event Handlers */
/*****************************************************************************/
Template.Profile.events({
});

/*****************************************************************************/
/* Profile: Helpers */
/*****************************************************************************/
Template.Profile.helpers({
});

/*****************************************************************************/
/* Profile: Lifecycle Hooks */
/*****************************************************************************/
Template.Profile.onCreated(function () {
});

Template.Profile.onRendered(function () {
  Session.set('title', 'Profile');
});

Template.Profile.onDestroyed(function () {
});
