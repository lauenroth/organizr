Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
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
      list = Lists.findOne({_id: id});
    }

    if (list) {
      Session.set('title', list.name);
      Session.set('currentList', list);
    }
    return list;
  }
});
Router.route('calendar');
Router.route('settings');
