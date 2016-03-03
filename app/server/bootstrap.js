Meteor.startup(function () {

  if (Tasks.find().fetch().length === 0) {

    Tasks.insert({
      description: 'This is a generated task',
      priority: 5,
      dueDate: new Date('2015-12-31'),
      reminder: new Date('2015-12-01'),
      snoozed: 0,
      labels: [],
      sharedWith: [],
      attachments: [],
      comments: [],
      created: new Date(),
    });

  }

});
