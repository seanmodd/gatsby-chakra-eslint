(function (window) {
	'use strict';

	/**
	 * Set up simple data for the app to use
	 */
	var Posts = [
		{
			name:'Sam Soffes',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai, Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai',
			userImage:"resources/images/misc/sam.png",
			media:null,
			type:'all',
			time:"3m"
		},
		{
			name:'Jenny Shen',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai',
			userImage:"resources/images/misc/meg.png",
			media:"resources/images/misc/post-image.png",
			type:'photo',
			time:"3m"
		},
		{
			name:'Pallavi Gupta',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai, Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai',
			userImage:"resources/images/misc/Kerem.png",
			media:null,
			type:'all',
			time:"3m"
		},
		{
			name:'Sam Soffes',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl.',
			userImage:"resources/images/misc/sam.png",
			media:null,
			type:'all',
			time:"3m"
		},
		{
			name:'Jenny Shen',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai',
			userImage:"resources/images/misc/meg.png",
			media:"resources/images/misc/post-image.png",
			type:'photo',
			time:"3m"
		},
		{
			name:'Pallavi Gupta',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai, Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai',
			userImage:"resources/images/misc/Kerem.png",
			media:null,
			type:'all',
			time:"3m"
		},
		{
			name:'Sam Soffes',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai',
			userImage:"resources/images/misc/sam.png",
			media:null,
			type:'all',
			time:"3m"
		},
		{
			name:'Jenny Shen',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl.',
			userImage:"resources/images/misc/meg.png",
			media:"resources/images/misc/post-image.png",
			type:'photo',
			time:"3m"
		},
		{
			name:'Pallavi Gupta',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai',
			userImage:"resources/images/misc/Kerem.png",
			media:"resources/images/misc/post-image.png",
			type:'photo',
			time:"3m"
		},
		{
			name:'Sam Soffes',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai, Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai',
			userImage:"resources/images/misc/sam.png",
			media:null,
			type:'all',
			time:"3m"
		},
		{
			name:'Jenny Shen',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl. Chicken fatback beef porchetta kielbasa tai',
			userImage:"resources/images/misc/meg.png",
			media:"resources/images/misc/post-image.png",
			type:'photo',
			time:"3m"
		},
		{
			name:'Pallavi Gupta',
			content: 'Bacon ipsum dolor sit amet jerky short ribs tongue ham kevin biltong tri-tip jowl.',
			userImage:"resources/images/misc/Kerem.png",
			media:null,
			type:'all',
			time:"3m"
		}
	];

	// Export to window
	window.app = window.app || {};
	window.app.Posts = Posts;
})(window);