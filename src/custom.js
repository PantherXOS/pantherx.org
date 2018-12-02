document.addEventListener('DOMContentLoaded', () => {

	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	if ($navbarBurgers.length > 0) {

		$navbarBurgers.forEach( el => {
			el.addEventListener('click', () => {

				const target = el.dataset.target;
				const $target = document.getElementById(target);

				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');

			});
		});
	}

});

Vue.use(Buefy.default)
Vue.use(VeeValidate)

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
		name: ''
	}
});