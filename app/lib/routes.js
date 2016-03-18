Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', function() {
  Router.go('/list/inbox');
});

Router.route('today');
Router.route('week');
Router.route('/list/:_id', {
  name: 'List',
  waitOn: function() {
    return Meteor.subscribe('lists');
  },
  data: function() {
    let id = this.params._id;
    let list = {};
    if (id === 'inbox') {
      list._id = 'inbox';
      list.name = 'Inbox';
    }
    else {
      list = Lists.findOne({_id: id, owner: Meteor.userId()});
    }

    if (list) {
      Session.set('title', list.name);
      Session.set('currentList', list);
    }
    else {
      Router.go('/');
    }
    return list;
  }
});
Router.route('calendar');

Router.route('profile');

Router.route('settings');
