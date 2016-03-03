/*****************************************************************************/
/* Menu: Event Handlers */
/*****************************************************************************/

Template.Menu.close = function() {
	$('body').removeClass('show-menu');
};

Template.Menu.events({

	'click #scrim': function() {
		Template.Menu.close();
	},

	'click .add-list': function(e) {
		e.preventDefault();
		$('.new-list').addClass('show').find('input').focus();
	},

	'click a': function(e) {
		$('nav.main .active').removeClass('active');
		$(e.currentTarget).parent().addClass('active');
		Template.Menu.close();
	},

	'submit form': function(e) {
		e.preventDefault();
		let input = $('.new-list input');
		let list = {
			name: input.val(),
			updated: new Date(),
		};
		if (list.name.length > 0) {
			let listId = Lists.insert(list);
			Router.go('/list/' + listId);
			$('.new-list').removeClass('show');
		}
		input.val('');
		Template.Menu.close();
	}

});

/*****************************************************************************/
/* Menu: Helpers */
/*****************************************************************************/
Template.Menu.helpers({

	lists: function() {
		return Lists.find();
	},

});

/*****************************************************************************/
/* Menu: Lifecycle Hooks */
/*****************************************************************************/
Template.Menu.onCreated(function () {
});

Template.Menu.onRendered(function () {
});

Template.Menu.onDestroyed(function () {
});
