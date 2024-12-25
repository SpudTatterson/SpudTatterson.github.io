export default class Helpers {
    static preloadAssets = (urls: string[]) => {
        urls.forEach(url => {
            const extension = url.split('.').pop()?.toLowerCase();
            if (extension === 'mp4' || extension === 'webm') {
                Helpers.preloadVideo(url);
            } else if (extension === 'gif' || extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
                Helpers.preloadImage(url);
            } else {
                console.warn(`Unsupported asset type for URL: ${url}`);
            }
        });
    };

    private static preloadImage = (url: string) => {
        const image = new Image();
        image.src = url;
    };

    private static preloadVideo = (url: string) => {
        const video = document.createElement('video');
        video.src = url;
        video.load();
    };
}
