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

    useEffect(
        () => {
            callAPI();
        }, [searchText]
    );

    const callAPI = async () => {
        const response = await youtube.searchVideos(searchText, 5);
        //console.log(response);

        setVideoList(response);
    }

    return (
        <React.Fragment>
            <Col xs={12} lg={8}>
                <SingleVideo detail={videoList[0]} />
            </Col>
            <Col xs={12} lg={4}>
                <Suggestions />
            </Col>
        </React.Fragment>
    )
}

export default Video
