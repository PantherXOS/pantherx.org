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
			getTimeline: async function () {
				let t = this;
        const url = this.mastodonAPI + `/timelines/public?limit=6&local=true`
        try {
          const response = await fetch(url);
          const timeline = await response.json();
          t.timeline = timeline
        } catch(e) {
          console.log(e)
        }
			},
		},
		beforeMount() {
			this.getTimeline()
		},
	});
}
