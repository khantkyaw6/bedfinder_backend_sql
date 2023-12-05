const router = require('express').Router();
const adminController = require('../../../controllers/v1/admin/adminController');
const { adminSchema } = require('../../../schemas/schema');

router.route('/').get(adminController.index).post(adminController.store);
router.route('/:id').get(adminController.show).delete(adminController.destroy);

module.exports = router;
