const client = stitch.Stitch.initializeDefaultAppClient("package-search-wywjs");
const mongodb = client.getServiceClient(
		stitch.RemoteMongoClient.factory,
		"mongodb-atlas"
);
const db = mongodb.db("packages");

let search = new Vue({
	el: '#package-search',
	delimiters:['<%', '%>'],
	data: {
		keyword: '',
		results: [],
		status: 'none',
		ticker: 0
	},
	methods: {
		search: function() {
			this.ticker = this.ticker + 1;
			this.auth()
		},
		auth: function() {
			let t = this;
			t.status = 'waiting';
			client.auth
					.loginWithCredential(new stitch.AnonymousCredential())
					.then(t.get)
					.catch(console.error);
		},
		get: function() {
			let t = this;
			console.log("searching..");
			db.collection("latest")
					.find({name: t.keyword.toLowerCase()}, {limit: 10})
					.toArray()
					.then(results => {
						t.results = results;
						console.log(results)
					});
			t.status = 'done';
		}
	}
});