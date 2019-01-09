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
	},
	methods: {
		search: function() {
			this.auth()
		},
		auth: function() {
			client.auth
					.loginWithCredential(new stitch.AnonymousCredential())
					.then(this.get)
					.catch(console.error);
		},
		get: function() {
			let t = this;
			console.log("searching..");
			db.collection("latest")
					.find({name: t.keyword}, {limit: 10})
					.toArray()
					.then(results => {
						t.results = results;
						console.log(results)
					});
		}
	}
});