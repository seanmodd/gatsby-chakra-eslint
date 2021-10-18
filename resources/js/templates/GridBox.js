(function (window) {
	'use strict';

	/**
	 * Creates and returns a template for an indivicual grid box
	 *
	 * @constructor
	 */
	function GridBox() {
	}

	/**
	 * HTML template for the grid box
	 *
	 * @prama {object} data for the grid box:
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
	GridBox.prototype.template = function(gridData){
		var template = '<div class="grid-view-box">'+
						'<div class="profile-picture">'+
							'<img src="' + gridData.userImage + '" />'+
						'</div>'+
						'<div class="post-contents">'+
							'<div class="post-user-name">'+
								gridData.name +
							'</div>'+
							'<div class="post-text">'+
								gridData.content +
							'</div>'+
						'</div>';
		// check to see if there is an image associated with the post
		template += gridData.media !== null ? '<div class="post-image">'+'<img src="' + gridData.media + '" /></div>' : '';
		template += '<div class="clear">&nbsp;'+
						'</div>'+
						'<div class="post-icons">'+
							'<img class="post-icon" src="resources/images/icons/share.png" />'+
							'<img class="post-icon" src="resources/images/icons/like.png" />'+
							'<span class="time">'+ gridData.time +'</span>'+
						'</div>'+
					'</div>';
		return template;
	};
	

	// Export to window
	window.app = window.app || {};
	window.app.GridBox = GridBox;
})(window);