/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/GESTIONE_CERTIFICATI_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_GESTIONE_CERTIFICATI_db_schema = [];
const db_GESTIONE_CERTIFICATI_db = [];

/**
 * SCHEMA DB GESTIONE_CERTIFICATI_db
 */



 /**
  * User
  */
db_GESTIONE_CERTIFICATI_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * area
  */
db_GESTIONE_CERTIFICATI_db_schema.area = new mongoose.Schema({
	nome: {
		type: 'String', 
		required : true,
		unique : true, 
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	area: {
		type: Schema.ObjectId, 
		required : true,
		ref : "voucher"
	},
	*/
});


 /**
  * corso
  */
db_GESTIONE_CERTIFICATI_db_schema.corso = new mongoose.Schema({
	nome: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	corso: {
		type: Schema.ObjectId,
		ref : "voucher"
	},
	*/
});


 /**
  * dipendente
  */
db_GESTIONE_CERTIFICATI_db_schema.dipendente = new mongoose.Schema({
	codiceFiscale: {
		type: 'String'
	},
	cognome: {
		type: 'String'
	},
	nome: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	dipendente: {
		type: Schema.ObjectId, 
		required : true,
		ref : "voucher"
	},
	*/
});


 /**
  * esame
  */
db_GESTIONE_CERTIFICATI_db_schema.esame = new mongoose.Schema({
	nome: {
		type: 'String', 
		required : true,
		unique : true, 
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	esame: {
		type: Schema.ObjectId, 
		required : true,
		ref : "voucher"
	},
	*/
});


 /**
  * voucher
  */
db_GESTIONE_CERTIFICATI_db_schema.voucher = new mongoose.Schema({
	codiceVoucher: {
		type: 'String'
	},
	dataAssegnazione: {
		type: 'Date'
	},
	dataScadenza: {
		type: 'Date'
	},
	note: {
		type: 'String'
	},
	tipologiaAcquisto: {
		type: 'String',
		enum : ["PERSONVUE","c","fornitore","nd","online","partnership"], 
	},
	//RELATIONS
	area: {
		type: Schema.ObjectId, 
		required : true,
		ref : "area"
	},
	corso: {
		type: Schema.ObjectId,
		ref : "corso"
	},
	dipendente: {
		type: Schema.ObjectId, 
		required : true,
		ref : "dipendente"
	},
	esame: {
		type: Schema.ObjectId, 
		required : true,
		ref : "esame"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./GESTIONE_CERTIFICATI_db_customSchema.js');
var GESTIONE_CERTIFICATI_db_model = require('./GESTIONE_CERTIFICATI_db_crud.js');

// Declare mongoose model

db_GESTIONE_CERTIFICATI_db.User = GESTIONE_CERTIFICATI_db_model.connection.model('User', db_GESTIONE_CERTIFICATI_db_schema.User );
db_GESTIONE_CERTIFICATI_db.area = GESTIONE_CERTIFICATI_db_model.connection.model('area', db_GESTIONE_CERTIFICATI_db_schema.area );
db_GESTIONE_CERTIFICATI_db.corso = GESTIONE_CERTIFICATI_db_model.connection.model('corso', db_GESTIONE_CERTIFICATI_db_schema.corso );
db_GESTIONE_CERTIFICATI_db.dipendente = GESTIONE_CERTIFICATI_db_model.connection.model('dipendente', db_GESTIONE_CERTIFICATI_db_schema.dipendente );
db_GESTIONE_CERTIFICATI_db.esame = GESTIONE_CERTIFICATI_db_model.connection.model('esame', db_GESTIONE_CERTIFICATI_db_schema.esame );
db_GESTIONE_CERTIFICATI_db.voucher = GESTIONE_CERTIFICATI_db_model.connection.model('voucher', db_GESTIONE_CERTIFICATI_db_schema.voucher );

module.exports = db_GESTIONE_CERTIFICATI_db;

// Create ADMIN user if does not exist
createUser.createUser();
