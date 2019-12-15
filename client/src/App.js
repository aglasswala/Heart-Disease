import React from 'react'

const App = () => {
	return (
		<div>
			<form action="/api/heart" method="POST" name="myform">
			    <p>Sex</p>
			    <input type="number" step="any" name="sex" id = "sex"/>
			    <p>Chest Pain (1 = typical angina 2 = atypical angina 3 = non-anginal pain 4 = asymptomatic)</p>
			    <input type="number" step="any" name="cp" id="cp"/>
			    <p>Blood Pressure (Trestbps)</p>
			    <input type="number" step="any" name="trestbps" id="trestbps"/>
			    <p>Max Heart Rate Achieved (Thalach)</p>
			    <input type="number" step="any" name="thalach" id="thlach">
			    <p>ST Depression induced by Exercise relative to rest (oldpeak)</p>
			    <input type="number" step="any" name="oldpeak" id="oldpeak"/>
			    <p>Number of major vessels (0-3) colored by flourosopy (ca)</p>
			    <input type="number" step="any" name="ca" id="ca">
			    <p>Thalassemia (blood disorder that cause body to make less hemoglobin, low levels of hemoglobin can cause anemia) (thal)</p>
			    <input type="number"step="any" name="thal" id="thal" />
			    <button type="submit" onclick="submitForm()" name="submission" id="submission">Submit</button>
			</form>
		</div>
	)
}

export default App