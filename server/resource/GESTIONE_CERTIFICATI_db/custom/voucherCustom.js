
const app = require('../../../app.js');
const db_GESTIONE_CERTIFICATI_db = require('../../../db/GESTIONE_CERTIFICATI_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
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
			enum : ["PERSONVUE","c","fornitore","nd","online","partnership"], 
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
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


