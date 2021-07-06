import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import SingleVideo from './SingleVideo'
import Suggestions from './Suggestions'
import Youtube from "simple-youtube-api"

// Youtube API KEY
import config from '../config'
const youtube = new Youtube(config.api_key);

function Video({ searchText }) {
    const [videoList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});

    useEffect(
        () => {
            callAPI();
        }, [searchText]
    );

    const callAPI = async () => {
        const response = await youtube.searchVideos(searchText, 18);
        //console.log(response);
        setSelectedVideo(response[0]);
        setVideoList(response);
    }

    const selectedVideoPlay=(videoDetail)=>{
        setSelectedVideo(videoDetail);
    }

    return (
        <React.Fragment>
            <Col xs={12} lg={8}>
                <SingleVideo detail={selectedVideo} />
            </Col>
            <Col xs={12} lg={4}>
                <Suggestions videos={videoList} changeSelection={selectedVideoPlay}/>
            </Col>
        </React.Fragment>
    )
}

export default Video
