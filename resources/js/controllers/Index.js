(function (window) {
	'use strict';

	/**
	 * Takes a model and view and acts as the controller between them
	 *
	 * @constructor
	 */
	function Controller() {
	}

	/**
	 * Used to determin what content to load (grid or list) defaluts to list
	 *
	 * @property {string} 'grid' | 'list'
	 */
	Controller.prototype.contentType = 'list';


	/**
	 * Used to determin what post type is selected
	 *
	 * @property {string} 'all' | 'photo'
	 */
	Controller.prototype.postType = 'all';

	/**
	 * Loads and content area with a grid type layout
	 *
	 * @param {string} '' | 'active' | 'completed'
	 */
	Controller.prototype.loadGrid = function (gridData) {

		// load the template and loop throught all the data
		var gridTemplate = new window.app.GridBox();
		var html = '<div class="max-width center-floater left-right-fifteen"><ul id="tiles">';
		for (var i= 0; gridData.length > i; i++) {
			html += "<li>";
			html += gridTemplate.template(gridData[i]);
			html += "</li>";
		}
		html += '</ul></div>';

		// once the templates are set, set the content and push it to the view
		$('.main-content').html(html).hide(0).fadeIn("slow");


		// grid config options
		var options = {
          itemWidth: 375,
          autoResize: true,
          container: $('#tiles'),
          offset: 5,
          outerOffset: 20,
          flexibleWidth: '50%'
        };

        // Get a reference to grid items.
        var handler = $('#tiles li');

        // add responsive check for the grid layout
        var $window = $(window);
        $window.resize(function() {
          var windowWidth = $window.width(),
              newOptions = { flexibleWidth: '50%' };
          if (windowWidth < 1024) {
            newOptions.flexibleWidth = '100%';
          }

          handler.wookmark(newOptions);
        });

        // Call the grid layout function.
        handler.wookmark(options);
	};

	/**
	 * Loads the content area with a list type layout
	 * todo-list
	 */
	Controller.prototype.loadList = function (listData) {
		// load the template and pass in the data
		var listTemplate = new window.app.ListBox();
		var html = '<div class="five-seventy-five center-floater left-right-fifteen">';
		for (var i= 0; listData.length > i; i++) {
			html += listTemplate.template(listData[i]);
		}
		html += '</div>';
		$('.main-content').html(html).hide(0).fadeIn("slow");
	};

	/**
	 * Shows all posts
	 */
	Controller.prototype.showAllPosts = function () {
		var alldata = window.app.Posts;
		var data = [];
		// checks if the post type is all
		if(this.postType === "all"){
			data = alldata;

		}else{
			// if the post type is photo the data needs to be filtered  to only photo data
			for (var i = 0; i < alldata.length; i++) {
				if(alldata[i].type === "photo"){
					data.push(alldata[i]);
				}
			}
		}

		// check what kind of layout is currently set and load the view
		if (this.contentType === "list") {
			this.loadList(data);
		}else{
			this.loadGrid(data);
		}
	};

	/**	 
	 * Shows only photos and loads view
	 */
	Controller.prototype.showPhotos = function () {
		var alldata = window.app.Posts;
		var data = [];
		for (var i = 0; i < alldata.length; i++) {
			if(alldata[i].type === "photo"){
				data.push(alldata[i]);
			}
		}
		if (this.contentType === "list") {
			this.loadList(data);
		}else{
			this.loadGrid(data);
		}
	};


	$( document ).ready(function() {

	//xxxxxxx Add all the listeners for the functions and set up initial view xxxxx\\
	var indexController = new Controller();
	var posts = window.app.Posts;
	indexController.loadList(posts);

	// sub nav event
	$(".nav li").click(function(){
		var id = $(this).attr("id");
		// remove selected state 
		$(".nav li.selected").removeClass("selected");
		// add new selected state
		$(this).addClass("selected");
		if(id == "allPosts"){
			indexController.postType = 'all';
			indexController.showAllPosts();
		}else{
			indexController.postType = 'photo';
			indexController.showPhotos();
		}
	});

	// layout change event
	$(".display-type li").click(function(){
		var id = $(this).attr("id");
		// remove selected state 
		$(".display-type li.selected").removeClass("selected");
		// add new selected state
		$(this).addClass("selected");
		if(id == "listDisplay"){
			indexController.contentType = 'list';
		}else{
			indexController.contentType = 'grid';
		}

		if(indexController.posts === 'all'){
			indexController.showAllPosts();
		}else{
			indexController.showPhotos();
		}
	});

	// menu click for movile device
	$(".header-user").click(function(){
		if( $(window).width() < 1024 ){
			var dropDown = $('.drop-down-mobile');
			if(dropDown.hasClass('visible')){
				$('.header').animate({height:60},200);
				dropDown.css({display:'none'});
				dropDown.removeClass('visible');
			}else{
				$('.header').animate({height:260},200);
				dropDown.css({display:'block'});
				dropDown.addClass('visible');
			}
			
		}
	});

	// show overlay
	$(".new-message-btn").click(function(){
		var ov = $('.overlay');
		ov
		.css({
			opacity:0,
			left: 0,
			top: 0,
			width: '100%',
			height: '100%'
		})
		.show()
		.animate({
			opacity:1,
		}, "fast");
	});

	// hide overlay
	$(".hideBtn").click(function(){
		$(".overlay")
		.animate({
			opacity:0,
		}, "fast", function(){
			$(this).css({
				display:'none'
			});
		});
	});

	});

	// Export to window
	window.app = window.app || {};
	window.app.Controller = Controller;
})(window);