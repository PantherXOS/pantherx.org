let search = new Vue({
  el: '#package-search',
  delimiters: ['<%', '%>'],
  data: {
    isBusy: false,
    keyword: '',
    results: [],
    total: 0,
  },
  mounted() {
    this.search()
  },
  methods: {
    search: async function () {
      this.isBusy = true
      let url = 'https://px-package-index.dokku.pantherx.dev/applications'
      if (this.keyword) {
        console.log('searching..')
        url += `?keyword=${this.keyword}`
      }
      try {
        const result = await axios.get(url)
        console.log(result)
        if (result.data) {
          this.results = result.data[0]
          this.total = result.data[1]
        }
      } catch (err) {
        console.error(err)
      }
      this.isBusy = false
    },
	splitPackageLocation(location) {
		// expected: gnu/packages/messaging.scm:2353:2
		const parts = location.split(':')
		if (parts.length === 3) {
			return {
				path: parts[0],
				line: parts[1],
				character: parts[2]
			}
		}
		return
	},
	packageLocationLink(location) {
		const sLoc = this.splitPackageLocation(location)
		if (sLoc) {
			// GITLAB format
			// return 'https://git.pantherx.org/development/pantherx/-/blob/rolling-nonlibre/' + sLoc.path + `#L${sLoc.line}`
			// cgit format
			return 'https://channels.pantherx.org/pantherx.git/tree/' + sLoc.path + `#n${sLoc.line}`
		} else {
			return '#'
		}
	}
  },
  watch: {
	  keyword: function() {
		  this.search()
	  }
  }
})
