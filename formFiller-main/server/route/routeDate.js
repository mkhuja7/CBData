const express = require('express')
const multer = require('multer')
const router = express.Router()
const dataController = require('../controller/dataController')

let store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads")

    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})

let uploadData = multer({
    storage: store
}).single("image")

router.route('/').get(dataController.getDatas).post(uploadData, dataController.createData)
router.route('/:id').get(dataController.getData).patch(dataController.patchData).delete(dataController.deleteData)


module.exports = router