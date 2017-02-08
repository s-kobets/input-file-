const sinon = require('sinon/pkg/sinon');
console.log(sinon);
const Vue = require('vue');
// document.addEventListener('DOMContentLoaded', inputLoad);

let app = new Vue({
	el: 'form',
	methods: {
		inputLoad: function () {
			const addFile = document.querySelector('.js-add-files');
			const inputFile = document.getElementById('fileInput');
			fetch('/todo/42/items')
				.then(data => {  
					console.log('Request succeeded with JSON response', data);
				});
			inputFile.click();
		},
		formData: function () {
			console.log(123123123123, el, new FormData(form[0]));
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