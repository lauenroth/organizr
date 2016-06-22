

Meteor.startup(function() {

  // make sure user is logged in
  if (!Meteor.userId()) {

    new Fingerprint2().get(function(hash) {
      Meteor.loginWithPassword(hash, hash, function(errorMessage) {
        if (errorMessage) {
          Accounts.createUser({
            username: hash,
            password: hash,
          }, function(errorMessage) {
            if (errorMessage)
              error(errorMessage);
          });
        }
      });
    });
  }

  // set default language
  var localeFromBrowser = window.navigator.userLanguage || window.navigator.language;
  var locale = 'en';
  if (localeFromBrowser.match(/de/)) {
    locale = 'de';
  }
  i18n.setLanguage(locale);
  moment.locale(locale);
});
