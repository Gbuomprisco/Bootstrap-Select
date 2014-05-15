Bootstrap-Select
================

JQuery plugin to create Bootstrap-like select elements

# Requirements
- Bootstrap CSS
- JQuery Core

# Usage

#### Plugin Options
	
	- button_label {String}
		- default value: false {Boolean}
			- if false, the button label will be the first option text in the select element
		- possible values: any other string
	- parent {Object}
		- selector:
			- default value: the parent of the select element initialized with the plugin
			- possible values: any other element in the page
		- placement:
			- default value: "append"
			- possible values:
				- "append"
				- "prepend"
				- "inner"

	var options = {
		button_label: "My Dropdwon Button", // or whatever
		parent: {
			selector: $('#myCustomElement') // or "#myCustomElement",
			placement: 'prepend' // or append or inner
		}
	}
	
	$mySelect.bootstrapSelect(options, callback);

#### HTML
	
	<select name="mySelect" id="mySelect">
		<option value="1">Option 1</option>
		<option value="2">Option 1</option>
		<option value="3">Option 1</option>
		<option value="4">Option 1</option>
	</select>

#### Javascript

	var $mySelect = $('#mySelect');
	$mySelect.bootstrapSelect({
		parent: {
			placement: 'prepend'
		}
	}, function(){
		console.log('Wow!');
	});