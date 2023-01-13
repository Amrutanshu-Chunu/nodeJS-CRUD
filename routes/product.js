// router is to define at what  time which file should work
const router = require("express").Router();
const productController = require('../controllers/productController');

router.post("/", productController.product_creat); // to post a data
router.get("/",productController.product_all); //to get all data
router.get("/:productId",productController.product_details); // to get a single data
router.put("/:productId", productController.product_update); // to update a data
router.delete("/:productId",productController.product_delete); // to delete a data
// only "/" to get all
// "/productId" - to a ccess a perticular data


module.exports = router;