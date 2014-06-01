Bootstrap-Select
================

JQuery plugin to create Bootstrap-like select elements

#### [LIVE DEMO](http://jsfiddle.net/WgCN9/)

# Requirements
- Bootstrap (CSS and JS)
- JQuery Core

# Installation
Install requirements with bower (or manually)

	bower install

The requirements JQuery and Bootstrap will be available in the generated folder "bower_components".

# Usage

#### Plugin Options
	
	- @label {String}
		- default value: false {Boolean}
			- if false, the button label will be the first option text in the select element
		- possible values: any other string
		
	- @parent {Object}
		- selector:
			- default value: the parent of the select element initialized with the plugin
			- possible values: any other element in the page
		- placement:
			- default value: "append"
			- possible values:
				- "append"
				- "prepend"
				- "inner"
	- @class {@String}
		- default value: "default"
		- It is possible to define other classes supported by Bootstrap

	- @input_group {Boolean}
		- default value: false
		- If true, a class to support input group gets added accordingly to Bootstrap's CSS


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

#### Events
You may use any event on the select element which get activated through the button element generated by the script.
If you want to catch the **focus** event on the select element, use instead the event **focusin**.
Ex.

	var $mySelect = $('#mySelect');
	$mySelect.bootstrapSelect();
	$mySelect.on('focusin', function(){
		console.log('Wow! Select focused!');	
	});

