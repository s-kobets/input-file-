const Vue = require('vue');
// document.addEventListener('DOMContentLoaded', inputLoad);

let app = new Vue({
	el: 'form',
	methods: {
		inputLoad: function () {
			const addFile = document.querySelector('.js-add-files');
			const inputFile = document.getElementById('fileInput');
			inputFile.click();
		},
		formData: function () {
			const form = $(this).closest('form');
			console.log(el, new FormData(form[0]));
		} 
	}
});

	// param.comments.on('change', '.js-msw-input-file', function () {
	// 	


// function getBase64(file, callback) {
// 	var reader = new FileReader();
// 	reader.readAsDataURL(file);
// 	reader.onload = function () {
// 		callback(reader.result);
// 	};
// 	reader.onerror = function (error) {
// 		console.log('Error: ', error);
// 	};
// }