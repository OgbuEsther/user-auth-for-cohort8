const productModel = require('../model/productModel');
const userModel = require('../model/userModel');
/**
 * create : upload product
 * get all : 
 * get one
 * update : update product (stock)
 * delete
 */

//create / upload
const uploadProduct = async (req, res) => {
    try {
        const getUserID = await userModel.findById(req.params.userId)
        const { name, description, price, category, stock, quantity, image } = req.body
        if (!getUserID) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        const product = await productModel.create(
            {
                name, description, price, category, stock, quantity, image

            })
 
        await getUserID.products.push(product._id)
        await getUserID.save()
        return res.status(201).json(
            {
                message: 'Product uploaded successfully', product

            })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//get all
const getAllProducts = async (req, res) => {
    try {
        const getAll = await productModel.find()
        return res.status(200).json({
            message: "All products fetched successfully",
            data: getAll
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    uploadProduct,
    getAllProducts
}
