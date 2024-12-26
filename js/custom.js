function getLatestPath(url) {
    const hashIndex = url.indexOf('#/');
    if (hashIndex !== -1) {
        const path = url.substring(hashIndex + 2);
        return path.split('/').pop();
    }
    return null;
}
function updateContent() {
    const url = window.location.href;
    const latestPath = getLatestPath(url);

    // Update Title
    var element = document.querySelector("#default > a > span");
    if (element) {
        element.textContent = latestPath.toUpperCase();
    }

    // Update Iframe
    const fileNameExt = latestPath + ".psd";
    if (latestPath) {
        const baseUrl = `${window.location.origin}/templates`;
        const fileUrl = `${baseUrl}/${fileNameExt}`;
        const photopeaUrl = `https://www.photopea.com#${encodeURIComponent(JSON.stringify({
            files: [fileUrl],
            environment: {}
        }))}`;
        document.getElementById('photopeaIframe').src = photopeaUrl;
    } else {
        console.log('No valid file found in the URL.');
    }
}
