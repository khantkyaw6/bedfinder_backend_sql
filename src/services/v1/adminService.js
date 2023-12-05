const db = require('../../databases/models');
const Admin = db.Admin;

const adminService = {
	index: async (req, res) => {
		try {
			const admin = await Admin.findAll({
				attributes: ['id', 'name', 'email', 'phone', 'role'],
			});

			res.json({
				isSuccess: true,
				message: 'Admin List',
				data: admin,
			});
		} catch (error) {
			throw new Error(error);
		}
	},
	store: async (req, res) => {
		try {
			const { name, email, phone, role } = req.body;

			const checkEmailandPhone = await Admin.findOne({
				where: { phone: phone },
			});

			console.log({ checkEmailandPhone });

			if (checkEmailandPhone) {
				throw new Error('Phone number already exist');
			}

			const admin = await Admin.create({
				name,
				email,
				phone,
				role,
			});

			if (!admin) throw new Error('Admin create failed');

			res.json({
				isSuccess: true,
				message: 'Admin Create Successfully',
				data: admin,
			});
		} catch (error) {
			throw new Error(error);
		}
	},
	show: async (req, res) => {
		try {
			const adminId = req.params.id;
			const admin = await Admin.findByPk(adminId, {
				attributes: ['id', 'name', 'email', 'phone', 'role'],
			});
			if (!admin) throw new Error('Admin Not Found');

			res.json({
				isSuccess: true,
				message: 'Admin List',
				data: admin,
			});
		} catch (error) {
			throw new Error(error);
		}
	},
	destroy: async (req, res) => {
		try {
			const adminId = req.params.id;
			const admin = await Admin.findByPk(adminId);
			if (!admin) throw new Error('Admin not found');

			await admin.destroy();

			res.json({
				isSuccess: true,
				message: 'Admin Delete Successfully',
			});
		} catch (error) {
			throw new Error(error);
		}
	},
};

module.exports = adminService;
