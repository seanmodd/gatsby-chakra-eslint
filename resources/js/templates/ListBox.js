(function (window) {
	'use strict';

	/**
	 * Creates and returns a template for an indivicual list box
	 *
	 * @constructor
	 */
	function ListBox() {
	}

	/**
	 * HTML template for the list box
	 *
	 * @prama {object} data for the list box:
	 * {
			name:'Jenny Shen',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai',
			userImage:"resources/images/misc/meg.png",
			media:"resources/images/misc/post-image.png",
			type:"all";
			time:"3m"
		}
	 * @return {string} html template filled out with data
	 */
	ListBox.prototype.template = function(listData){
		var template = '<div class="list-view-box">'+
						'<div class="profile-picture">'+
							'<img src="'+ listData.userImage +'" />'+
						'</div>'+
						'<div class="post-contents">'+
							'<div class="post-user-name">'+
								listData.name +
							'</div>'+
							'<div class="post-icons">'+
								'<img class="post-icon" src="resources/images/icons/share.png" />'+
								'<img class="post-icon" src="resources/images/icons/like.png" />'+
								'<span class="time">'+ listData.time +'</span>'+
							'</div>'+
							'<div class="post-text">'+
								listData.content +
							'</div>'+
						'</div>'+
						'&nbsp;';
		// check to see if there is an image associated with the post
		template += listData.media !== null ? '<div class="post-image">'+'<img src="' + listData.media + '" /></div>' : '';
		template += '</div>';
		return template;
	};
	

	// Export to window
	window.app = window.app || {};
	window.app.ListBox = ListBox;
})(window);