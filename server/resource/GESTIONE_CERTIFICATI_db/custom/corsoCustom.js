
const app = require('../../../app.js');
const db_GESTIONE_CERTIFICATI_db = require('../../../db/GESTIONE_CERTIFICATI_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
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
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


