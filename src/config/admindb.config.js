require('dotenv').config();
const { DB_CONNECTION, DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD } =
	process.env;

module.exports = {
	development: {
		username: DB_USERNAME || 'uoetu7izzjdtfi0x',
		password: DB_PASSWORD || 'yP2NupbwkyQkCGiYupr4',
		database: DB_DATABASE || 'bcrozjfxwwcy4x3gcxmf',
		host: DB_HOST || 'bcrozjfxwwcy4x3gcxmf-mysql.services.clever-cloud.com',
		dialect: DB_CONNECTION || 'mysql',
	},
	// development: {
	// 	username: DB_USERNAME || 'root',
	// 	password: DB_PASSWORD || 'root',
	// 	database: DB_DATABASE || 'database_development',
	// 	host: DB_HOST || '127.0.0.1',
	// 	dialect: DB_CONNECTION || 'mysql',
	// },
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
};
