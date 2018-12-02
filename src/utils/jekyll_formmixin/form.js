var formMixin = {
	delimiters:['<%', '%>'],
	data() {
		return {
			hasError: false,
			hasSuccess: false,
			hasFailure: false,
			isWaiting: false,
			name: null,
			data: null
		}
	},
	methods: {
		onSubmit: function(event) {
			let t = this;
			t.$validator.validateAll().then((result) => {
				if (result) {
					t.isWaiting = true;
					const formData = new FormData(this.$refs['form']);
					const data = {};
					for (let [key, val] of formData.entries()) {
						Object.assign(data, { [key]: val })
					}
					axios.post(t.formAPI, data, {
						headers: {
							'Content-type': 'application/x-www-form-urlencoded',
						}
					})
							.then(function (response) {
								let nameEncoded = encodeURI(t.name);
								let destination = t.formThankYou + '?name=' + nameEncoded;
								window.location.replace(destination);
							})
							.catch(function (error) {
								console.log("Failure!");
								console.log(error);
								t.data = data;
								t.hasFailure = true
							});
					return;
				}
				t.hasError = true
			});
		},
	}
};
