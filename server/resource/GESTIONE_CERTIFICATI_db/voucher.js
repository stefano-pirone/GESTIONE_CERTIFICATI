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
 *  TO CUSTOMIZE voucher.js PLEASE EDIT ../custom/voucherCustom.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
const app = require('../../app.js');
const db_GESTIONE_CERTIFICATI_db = require('../../db/GESTIONE_CERTIFICATI_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/voucherCustom.js');

/*
 * SCHEMA DB voucher
 * 
	{
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
			enum : ["PERSONVUE","c","fornitore","nd","online","partnership"]
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		area: {
			type: Schema.ObjectId,
			required : true,
			ref : "voucher"
		},
		corso: {
			type: Schema.ObjectId,
			ref : "voucher"
		},
		dipendente: {
			type: Schema.ObjectId,
			required : true,
			ref : "voucher"
		},
		esame: {
			type: Schema.ObjectId,
			required : true,
			ref : "voucher"
		},
		
	}
 * 
 */



//CRUD METHODS


/**
 * voucherService.findByarea
 *   @description CRUD ACTION findByarea
 *   @param Objectid key Id della risorsa area da cercare
 *
 */
app.get(properties.api + '/voucher/findByarea/:key', function (req, res) {

	db_GESTIONE_CERTIFICATI_db.voucher.find({ 'area' : req.params.key}).exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});

/**
 * voucherService.findBydipendente
 *   @description CRUD ACTION findBydipendente
 *   @param Objectid key Id della risorsa dipendente da cercare
 *
 */
app.get(properties.api + '/voucher/findBydipendente/:key', function (req, res) {

	db_GESTIONE_CERTIFICATI_db.voucher.find({ 'dipendente' : req.params.key}).exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});

/**
 * voucherService.findByesame
 *   @description CRUD ACTION findByesame
 *   @param Objectid key Id della risorsa esame da cercare
 *
 */
app.get(properties.api + '/voucher/findByesame/:key', function (req, res) {

	db_GESTIONE_CERTIFICATI_db.voucher.find({ 'esame' : req.params.key}).exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */
