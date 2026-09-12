const express = require('express');
const { uploadProduct, getAllProducts } = require('../controller/productController');
const upload = require('../config/multer');


const router = express.Router();

router.post('/upload/:userId',upload.single('image'), uploadProduct);
router.get('/getall', getAllProducts);

module.exports = router;