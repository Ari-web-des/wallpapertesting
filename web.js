const videoSources = [
    'https://motionbgs.com/media/6304/infinity-castle.960x540.mp4',
    'https://motionbgs.com/media/6407/evil-sukuna.960x540.mp4',
    'https://motionbgs.com/media/6079/luffy-smiling-gear-5.960x540.mp4',
    'https://motionbgs.com/media/6055/jin-woo-shadows-might.960x540.mp4'
];

let currentVideoIndex = 0;

document.getElementById('dynamicButton').addEventListener('click', function() {
    // Update the video index to the next video
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;

    // Get the video element
    const videoElement = document.getElementById('backgroundVideo');

    // Pause the current video
    videoElement.pause();

    // Update the source directly on the video element
    videoElement.querySelector('source').src = videoSources[currentVideoIndex];
    
    // Load and play the new video
    videoElement.load();
    videoElement.play();

    console.log("Current video source:", videoElement.src);
});

