export const API =
	window.location.hostname === 'localhost'
		? 'http://127.0.0.1:4000/v1'
		: window.location.hostname === 'stage.flathub.io'
		? 'http://stage-api.flathub.io'
		: 'https://api.flathub.io';
// export const company = 'https://company.getdev.co';
export const GA = 'UA-109216402-1';
