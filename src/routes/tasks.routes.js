import { Router } from "express"
import { authRequired } from "../middlewares/validateToken.js"
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct, getAllProducts } from '../controllers/tasks.controller.js'
import { validateSchema } from "../middlewares/validator.middleware.js"
import { createProductSchema } from "../schemas/product.schema.js"

const router = Router()



router.get('/', getAllProducts)

router.get('/products', getProducts)

router.get('/product/:id',  getProduct)

router.post('/product', validateSchema(createProductSchema), createProduct)

router.delete('/product/:id', deleteProduct)

router.put('/product/:id', updateProduct)

export default router;