$.fn.bootstrapSelect = function(options, callback) {

	var $element = $(this);

	/*
		@button_label {String|Boolean}
		** The default label of the button to show the dropdown is the first element of the select
		** Overwrite this option to have an initial label for the button

		@parent {Object}
		** The default values for parent is selector: false, placement: ''.
		** If not overwritten, the new elements will be created just after the select element

		** @parent.selector is the selector where to put the new elements generated
		** @parent.placement is where to put the new elements inside the parent selector. It could be:
			- append: it will append the elements at the end of the node
			- prepend: it will append the elements at the beginning of the node
			- inner: it will overwrite the whole node element with the new elements
		*/

	var default_options = {
		button_label: false,
		parent: {
			selector: $element.parent(),
			placement: 'append'
		}
	};

	default_options = $.extend(default_options, options);

	var parent = default_options.parent;
	var parentSelector = $(default_options.parent.selector);
	var caret = ' <span class="caret"></span>';

	var _id = "select-" + $element.attr('id');

	var init = function() {
		createElements(function() {
			events();
			if (callback) {
				callback();
			}
		});
	};

	var Button = function(_id, classes) {

		var element = $('<button type="button" data-toggle="dropdown" id="' + _id + '">');
		element.addClass(classes);

		var set_label = function(label) {
			element.html(label + caret);
		};

		return {
			'selector': element,
			'set_label': set_label
		};
	};

	var Dropdown = function(_id) {

		var element = $('<ul class="dropdown-menu" role="menu" data-button="' + _id + '">');
		var options = '';

		$element.find('option').each(function() {
			options += '<li><a data-value="' + $(this).val() + '">' + $(this).text() + '</a></li>';
		});

		element.html(options);
		return element;
	};

	var events = function() {

		/*	The select element gets hidden	*/
		$element.hide();

		/*	Selecting button and dropdown elements	*/
		var button_element = $('#' + _id);
		var select = $('[data-button="' + _id + '"]');

		/*
		 ** Actvating event on click on dropdown elements to change
		 ** the value of the actual select
		 */

		select.find('a').on('click', function(event) {

			var _val = $(this).data('value');
			var _label = $(this).text();

			/*	Assigning values to button (label) and real select (value)	*/
			$element.val(_val.toString()).trigger('change');
			button_element.html(_label + caret);

			/*	Preventing link action	*/
			event.preventDefault();
		}).css('cursor', 'pointer');

	};

	var createElements = function(callback) {

		var element = $('<div class="input-group-btn">');
		var _label;

		var button = new Button(_id, "btn btn-default dropdown-toggle");
		var dropdown = new Dropdown(_id);

		if (default_options.button_label) {
			_label = default_options.button_label;
		} else {
			_label = $element.find('option')[0].innerHTML;
		}

		button.set_label(_label);
		element.append(button.selector).append(dropdown);
		inject(element);
		callback();
	};

	var inject = function(elements) {

		if (!parent.placement || parent.placement == 'append') {
			parentSelector.append(elements);
		} else {
			if (parent.placement == 'prepend') {
				parentSelector.prepend(elements);
			} else if (parent.placement == 'inner') {
				parentSelector.html(elements);
			}
		}
	};

	init();
};