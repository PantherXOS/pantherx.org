if(document.getElementById("mastodonTimeline")!=null) {
	var mastodon = new Vue({
		delimiters: ['<%', '%>'],
		el: '#mastodonTimeline',
		data: {
			mastodonAPI: 'https://pantherx.social/api/v1',
			timeline: ''
		},
		filters: {
			toRelativeDate: function (value) {
				return moment(value).from();
			}
		},
		methods: {
			getTimeline: function () {
				let t = this;
				axios.get(this.mastodonAPI + '/timelines/public', {
					params: {
						limit: 6,
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
		beforeMount() {
			this.getTimeline()
		},
	});
}
