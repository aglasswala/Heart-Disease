module.exports = {
	heart: (req, res) => {
		console.log(req.body)
		const { sex, cp, trestbps, thalach, oldpeak, ca, thal } = req.body

		if (thal < 2.5) {
			if (ca < 0.5) {
				return res.status(200).send({
					"result": "There's an 88% chance for heart disease"
				})
			}

			if (cp < 0.5) {
				if (sex < 0.5) {
					return res.status(200).send({
						"result": "There's a 43% chance for heart disease"
					})
				}

				return res.status(200).send({
					"result": "There's a 0% chance for heart disease"
				})
			}

			return res.status(200).send({
				"result": "There's a 71% chance for heart disease"
			})

		} 

		if (oldpeak < 0.7) {
			if (trestbps < 122) {
				return res.status(200).send({
					"result": "There's a 82% chance for heart disease"
				})
			}

			return res.status(200).send({
				"result": "There's a 37% chance for heart disease"
			})
		}

		if (cp < 2.5) {
			if (cp < 1.5) {
				return res.status(200).send({
					"result": "There's a 0% chance for heart disease"
				})
			}

			if (oldpeak < 1.9) {
				if (thalach < 138.5) {
					return res.status(200).send({
						"result": "There's a 0% chance for heart disease"
					})
				}

				return res.status(200).send({
					"result": "There's a 71% chance for heart disease"
				})
			}

			return res.status(200).send({
				"result": "There's a 0% chance for heart disease"
			})
		}

		return res.status(200).send({
			"result": "There's a 0.67% chance for heart disease"
		})
	}
}