const express = require('express');
const router = express.Router();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(111)
        cb(null, 'image/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+".png")
    }
})
const upload = multer({ storage: storage })

router.post('/', upload.single('image'),async (req, res) =>{
    const filename = req.file.filename
    res.json({ filename })
})

router.get('/:name', async (req, res) =>{
    const name = req.params.name
    //const file = `image/image-${name}`
    const file = name

    res.sendFile(file, { root: "image/" })
})

module.exports = router