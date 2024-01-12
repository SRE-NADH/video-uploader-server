const videoModel = require('../Models/videoModel');

const createVideo = async(req,res)=>{
    const {videoUrl,subtitle} = req.body;
    try{
        const video = await videoModel.findOne({
            videoUrl:videoUrl
        });
        if(video) return res.status(200).json(video);

        const newVideo = new videoModel({
            videoUrl:videoUrl,
            subtitle:subtitle
        });

        let response = await newVideo.save();
        return res.status(200).json(response);
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}


const updateVideo = async(req,res)=>{
    const {_id,subtitle} = req.body;
  try{
    let video = await videoModel.findById(_id);
    video.subtitle = subtitle;
    let response  = await video.save();
    return res.status(200).json(response);
  }
  catch(error){
    return res.status(500).json(error.message);
  }
}

const getVideo = async(req,res)=>{
    const {id} = req.params;
    try{
      let video = await videoModel.findById(id);
      return res.status(200).json(video);
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}

const getAllVideos=async(req,res)=>{
   
    try{
     let videos = await videoModel.find();
     return res.status(200).json(videos);
    }
    catch(error){
     return res.status(500).json(error.message);
    }
}


module.exports = {createVideo,updateVideo,getVideo,getAllVideos}
