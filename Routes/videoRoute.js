const express = require('express');

const {createVideo,updateVideo,getVideo, getAllVideos} = require('../Controller/videoController');
const router = express.Router();

router.post('/',createVideo);
router.put('/update',updateVideo);
router.get('/get/:id',getVideo);
router.get('/get',getAllVideos)

module.exports=router;
