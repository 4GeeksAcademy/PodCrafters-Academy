import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
	return (
		<div>
			<ReactPlayer
				url="public/video/videoHomePage.mp4"
				controls={true}
				width="100%"
				height="100%"
			/>
		</div>
	);
}

export default VideoPlayer;