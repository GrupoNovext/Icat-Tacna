const jwt = require("jsonwebtoken");
const Lawyer = require("../models/Lawyer");
const config = require("../config");


module.exports = {
    login(req, res) {
        const { dni, password } = req.body;
		const error = {}
		Lawyer.login(dni, password)
			.then((lawyer) => {
				if(!lawyer){
					error.message = "El dni ingresado no existe";
					return res.status(401).send(error);
				}
				if(!lawyer.logged){
					error.message = "La contraseña es incorrecta";
					return res.status(401).send(error);
				}
				console.log("lawyer", lawyer)
				lawyer.token = jwt.sign(lawyer, config.secret);
				return res.status(200).send(lawyer);
			}).catch(() => {
				error.message = "Ocurrio un error, revisar los detalles";
				error.details = err;
				return res.status(503).send(error);
			})
	},
    create(req,res) {
		const data = req.body;
		const error = {};
		const body = {};

		if(!Object.keys(data).length){
			let error = {};
		
			error.message = "Debe indicar los datos del usuario. Intentelo de nuevo";
			return res.status(503).send(error);
		}
		delete data.isVerified;

		Lawyer.create(data).then((lawyer) => {
			delete data.password;
			data.token = jwt.sign(data, config.secret);
			return res.json(data);
		})
		.catch((err)=>{
			console.log(err)
			error.message = "No se pudo crear el usuario, intentelo de nuevo"
			return res.status(503).send(error);
		})
	}
}