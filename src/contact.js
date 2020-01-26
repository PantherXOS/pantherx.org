Vue.use(Buefy.default);
Vue.use(VeeValidate);

var tooltip = new Vue({
	el: '#tooltip'
});

var contactUs = new Vue({
	mixins: [formMixin],
	el: '#formContact',
	data: {
		formThankYou: '/thanks/',
		formAPI: 'https://hooks.zapier.com/hooks/catch/184367/qqrjjs/',
		member: false,
		name_first: '',
		name: ''
	}
});
