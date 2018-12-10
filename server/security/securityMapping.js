/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

exports.authMapping = {
    //STATIC SECURITY
    'POST - /api/changePassword$': [],
    'POST - /api/users/$': ["ADMIN"],
    'POST - /api/users/([^/])+$': ["ADMIN"],
    'GET - /api/users/$': ["ADMIN"],
    'GET - /api/users/([^/])+$': ["ADMIN"],
    'POST - /api/users/([^/])+/changePassword': ["ADMIN"],

    //YOUR SECURITY MAPPING
	'POST - /api/Users/([^/])+/changePassword$' : ["ADMIN"],
	'POST - /api/Users/*$' : [],
	'DELETE - /api/Users/([^/])+$' : [],
	'GET - /api/Users/([^/])+$' : [],
	'GET - /api/Users/*$' : [],
	'POST - /api/Users/([^/])+$' : [],
	'POST - /api/aree/*$' : [],
	'GET - /api/aree/([^/])+$' : [],
	'GET - /api/aree/*$' : [],
	'POST - /api/aree/([^/])+$' : [],
	'POST - /api/corsi/*$' : [],
	'GET - /api/corsi/([^/])+$' : [],
	'GET - /api/corsi/*$' : [],
	'POST - /api/corsi/([^/])+$' : [],
	'POST - /api/dipendenti/*$' : [],
	'GET - /api/dipendenti/([^/])+$' : [],
	'GET - /api/dipendenti/*$' : [],
	'POST - /api/dipendenti/([^/])+$' : [],
	'POST - /api/esami/*$' : [],
	'GET - /api/esami/([^/])+$' : [],
	'GET - /api/esami/*$' : [],
	'POST - /api/esami/([^/])+$' : [],
	'GET - /api/voucher/findByarea/([^/])+$' : [],
	'GET - /api/voucher/findBydipendente/([^/])+$' : [],
	'GET - /api/voucher/findByesame/([^/])+$' : [],
	

}
