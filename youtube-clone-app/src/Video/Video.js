import React, { useEffect, useState } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import SingleVideo from './SingleVideo'
import Suggestions from './Suggestions'
import Youtube from "simple-youtube-api"

// Youtube API KEY
import config from '../config'
const youtube = new Youtube(config.api_key);

function Video({ searchText }) {
    document.title = "YouTube-Clone-App";

    const [videoList, setVideoList] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({});
    const [error, setError] = useState(false);

    useEffect(
        () => {
            callAPI();
        }, [searchText]
    );

    const callAPI = async () => {
        const response = await youtube.searchVideos(searchText, 18);

        //check for error
        if (response.length === 0) {
            setError(true);
        } else {
            setError(false);
        }

        setSelectedVideo(response[0]);
        setVideoList(response);
    }

    const selectedVideoPlay = (videoDetail) => {
        setSelectedVideo(videoDetail);
    }

    return (
        <React.Fragment>
            <Col xs={12} lg={8}>
                {error
                    ? <h1>No videos found for "{searchText}"</h1>
                    : <SingleVideo detail={selectedVideo} />}
            </Col>
            <Col xs={12} lg={4}>
                <ListGroup>
                    <Suggestions
                        videos={videoList}
                        changeSelection={selectedVideoPlay}
                        selectedVideoId={selectedVideo.id} />
                </ListGroup>
            </Col>
        </React.Fragment>
    )
}

export default Video
