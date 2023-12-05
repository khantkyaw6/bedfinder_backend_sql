const Joi = require('joi');

module.exports = {
	adminSchema: {
		store: Joi.object({
			name: Joi.string().min(3).max(20).required(),
			email: Joi.string().email().required().messages({
				'string.email': 'Must be Email',
				'string.empty': 'Email must not be empty',
				'any.required': 'Email is required',
			}),
			phone: Joi.string().required().min(7).max(11).messages({
				'string.empty': 'Phone must not be empty',
				'any.required': 'Phone field must be required',
				'string.min': 'Phone must be min 7',
				'string.max': 'Phone must be max 11',
			}),
			role: Joi.string().required(),
		}),
	},
};
