const { adminSchema } = require('../../../schemas/schema');
const adminService = require('../../../services/v1/adminService');

const adminController = {
	index: async (req, res, next) => {
		adminService.index(req, res, next).catch((err) => next(err));
	},
	store: async (req, res, next) => {
		console.log(req);
		const { error, value } = adminSchema.store.validate(req.body);

		console.log({ error, value });

		if (error) {
			res.status(400).json({
				isSuccess: false,
				error: error.details[0].message,
			});
		}

		adminService.store(req, res, next).catch((err) => next(err));
	},
	show: async (req, res, next) => {
		adminService.show(req, res, next).catch((err) => next(err));
	},
	update: async (req, res, next) => {},
	destroy: async (req, res, next) => {
		adminService.destroy(req, res, next).catch((err) => next(err));
	},
};

module.exports = adminController;
