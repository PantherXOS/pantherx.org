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
		name: ''
	}
});

var mastodon = new Vue({
	delimiters:['<%', '%>'],
	el: '#mastodonTimeline',
	data: {
		mastodonAPI: 'https://pantherx.social/api/v1',
		timeline: ''
	},
	filters: {
		toRelativeDate: function(value) {
			return moment(value).startOf('day').fromNow();
		}
	},
	methods: {
		getTimeline: function() {
			let t = this;
			axios.get(this.mastodonAPI + '/timelines/public', {
				params: {
					limit: 8,
					local: true
				}
			})
			.then(function (response) {
				return response;
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function (myJson) {
				t.timeline = myJson.data;
			});
		}
	},
	beforeMount(){
		this.getTimeline()
	},
});