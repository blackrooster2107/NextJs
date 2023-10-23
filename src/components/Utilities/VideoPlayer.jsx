'use client'

const { default: ReactPlayer } = require("react-player")

const VideoPlayer = ({link})=>{
    return (
        <>
            <ReactPlayer url={link} width={480}/>
        </>
    )
}

export default VideoPlayer