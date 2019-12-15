import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import './App.css'

const App = () => {
	const [sex, setSex] = useState(1)
	const [cp, setCP] = useState(1)
	const [bp, setBP] = useState(94)
	const [hr, setHR] = useState(71)
	const [oldpeak, setOldPeak] = useState(0)
	const [ca, setCA] = useState(0)
	const [thal, setThal] = useState(0)
	const [result, setResult] = useState("")
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
	  	return setOpen(true)
	}

	const handleClose = () => {
	 	return setOpen(false)
	}

	const handleSex = (e) => {
		return setSex(e.target.value)
	} 

	const handleCP = (e) => {
		return setCP(e.target.value)
	} 

	const handleBP = (e) => {
		return setBP(e.target.value)
	} 

	const handleHR = (e) => {
		return setHR(e.target.value)
	} 

	const handleOldPeak = (e) => {
		return setOldPeak(e.target.value)
	} 

	const handleCA = (e) => {
		return setCA(e.target.value)
	} 

	const handleThal = (e) => {
		return setThal(e.target.value)
	} 

	const handleResult = (data) => {
		return setResult(data)
	}

	const submit = (e) => {
		e.preventDefault()
		fetch("http://localhost:3001/api/heart", {
			method: "post",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				sex: sex,
				cp: cp,
				trestbps: bp,
				thalach: hr,
				oldpeak: oldpeak,
				ca: ca,
				thal: thal
			})
		})
		.then(response => response.json())
		.then(result => {
			handleResult(result.result)
			handleClickOpen()
		})
		.catch(err => {
			console.log(err)
		})
	}

	return (
		<div>
			<div className="container">
			  <div className="col-md-6 mx-auto text-center">
				 <div className="header-title">
					<h1 className="wv-heading--title">
					   Find out what's the risk of Heart Disease
					</h1>
					<h2 className="wv-heading--subtitle">
					   According to the study from the American Heart Association, 121.5 million Americans, or about 48.5 percent, dealt with heart or blood vessel disease as of 2016. 
					</h2>
				 </div>
			  </div>
			  <div className="row">
				 <div className="col-md-4 mx-auto">
					<div className="myform form ">
					   <form name="myform">
						    <div className="form-group">
							    <label name="sex" id="sex">Sex</label>
		                        <select className="form-control" onChange={handleSex} name="sex" id="sex">
		                            <option value="1">Male</option>
		                            <option value="0">Female</option>
		                        </select>
						    </div>
						    <div className="form-group">
							    <label name="cp" id="cp">Chest Pain</label>
		                        <select className="form-control" onChange={handleCP} name="cp" id="cp">
		                            <option value="1">Typical Angina</option>
		                            <option value="2">Atypical Angina</option>
		                            <option value="3">Non-anginal pain</option>
		                            <option value="4">Asymptomatic</option>
		                        </select>
						    </div>
						    <div className="form-group">
							    <p>Blood Pressure (Trestbps) Range: 94 - 200</p>
		                        <input type="number" onChange={handleBP} className="form-control my-input" step="any" name="trestbps" id="trestbps"/>
						    </div>
		                    <div className="form-group">
		                        <p>Max Heart Rate Achieved (Thalach) Range: 71 - 202 bpm</p>
		                        <input type="number" onChange={handleHR} className="form-control my-input" step="any" name="thalach" id="thlach" />
		                    </div>
		                    <div className="form-group">
		                        <p>ST Depression induced by Exercise relative to rest (oldpeak) Range: 0 - 6.2 </p>
		                        <input type="number" onChange={handleOldPeak} className="form-control my-input" step="any" name="oldpeak" id="oldpeak"/>
		                    </div>                         
		                    <div className="form-group">
		                        <label name="ca" id="ca">Number of major vessels (0-3) colored by flourosopy (ca)</label>
		                        <select className="form-control" onChange={handleCA} name="ca" id="ca">
		                            <option value="0">0</option>
		                            <option value="1">1</option>
		                            <option value="2">2</option>
		                            <option value="3">3</option>
		                        </select>
		                    </div>
		                    <div className="form-group">
		                        <p>Thalassemia (blood disorder that cause body to make less hemoglobin, low levels of hemoglobin can cause anemia) (thal) Range: 0 - 3</p>
		                        <input type="number"step="any" onChange={handleThal} name="thal" className="form-control my-input" id="thal"/>
		                    </div>                        
						    <div className="text-center">
							   <button name="submission" onClick={submit} id="submission" className="btn btn-block send-button tx-tfm mt-3">Submit</button>
						    </div>
					        <div className="text-center">
					    	   <button type="reset" className="btn btn-block g-button tx-tfm mt-3">Clear</button>
					        </div>
					    </form>
					</div>
				 </div>
			  </div>
			</div>
			<Dialog
			  open={open}
			  onClose={handleClose}
			  aria-labelledby="alert-dialog-title"
			  aria-describedby="alert-dialog-description"
			>
			  <DialogTitle id="alert-dialog-title">{"Here's your results"}</DialogTitle>
			  <DialogContent>
			    <DialogContentText id="alert-dialog-description">
			      {result}
			    </DialogContentText>
			  </DialogContent>
			  <DialogActions>
			    <Button onClick={handleClose} color="primary">
			      Clear
			    </Button>
			  </DialogActions>
			</Dialog>
		</div>
	)
}

export default App