/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE corso.js PLEASE EDIT ../custom/corsoCustom.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
const app = require('../../app.js');
const db_GESTIONE_CERTIFICATI_db = require('../../db/GESTIONE_CERTIFICATI_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/corsoCustom.js');

/*
 * SCHEMA DB corso
 * 
	{
		nome: {
			type: 'String', 
			required : true
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		corso: {
			type: Schema.ObjectId,
			ref : "voucher"
		},
		
	}
 * 
 */



//CRUD METHODS


/**
 * corsoService.create
 *   @description CRUD ACTION create
 *
 */
app.post(properties.api + '/corsi', function (req, res) {
	obj = new db_GESTIONE_CERTIFICATI_db.corso(req.body);
	obj.save(function (err) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * corsoService.get
 *   @description CRUD ACTION get
 *   @param ObjectId id Id 
 *
 */
app.get(properties.api + '/corsi/:id', function (req, res) {
	db_GESTIONE_CERTIFICATI_db.corso.findOne({_id:req.params.id}).exec(function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * corsoService.list
 *   @description CRUD ACTION list
 *
 */
app.get(properties.api + '/corsi', function (req, res) {
	db_GESTIONE_CERTIFICATI_db.corso.find().exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
});

/**
 * corsoService.update
 *   @description CRUD ACTION update
 *   @param ObjectId id Id
 *
 */
app.post(properties.api + '/corsi/:id', function (req, res) {
	db_GESTIONE_CERTIFICATI_db.corso.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

