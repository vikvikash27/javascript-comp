document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("cameraFeed");
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Error accessing the camera:', error)
        })
})