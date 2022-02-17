const DataSTF = require('../model/modelData')
const fs = require('fs')

exports.getDatas = async (req, res) => {
    try {
        const data = await DataSTF.find()
        res.status(200).json({
            status: 'success',
            data
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'fail'
        })
    }
}


exports.getData = async (req, res) => {
    try {
        const data = await DataSTF.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
                data
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'fail'
        })
    }
}

exports.createData = async (req, res) => {
    const post = req.body
    const imagename = req.file.filename
    post.image = imagename

    try {

        await DataSTF.create(post)

        res.status(200).json({
            status: 'success',
            message: 'created'
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.patchData = async (req, res) => {

    const id = req.params.id
    let new_image = ''
    if (req.file) {
        new_image = req.file.filename
        try {
            fs.unlinkSync('./uploads' + req.body.old_image)
        } catch (err) {
            res.status(404).json({
                status: 'fail',
                message: 'fail'
            })
        }
    } else {
        new_image = req.body.old_image
    }
    const newPost = req.body
    newPost = new_image
    try {
        await DataSTF.findByIdAndUpdate(id, newPost)
        res.status(200).json({
            status: 'success',
            message: 'update'
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'fail'
        })
    }

}

exports.deleteData = async (req, res) => {
    try {

        const data = await DataSTF.findByIdAndDelete(req.params.id)
        if (data.image != '') {
            try {
                fs.unlinkSync('./uploads' + resul.image)
            } catch (err) {
                console.log(err);
            }
        }
        res.status(200).json({
            status: 'success',

        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'fail'
        })
    }


}