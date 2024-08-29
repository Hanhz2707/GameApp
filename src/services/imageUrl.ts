import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCroppedImageUrl = (url:string) => {

    if (!url) {
        return noImage;
    }

    const img = new Image();
    img.onload = () => {
        if(img.width <= 600 || img.height <= 400) {

        }
        else {

            const index = url.indexOf('media/') + 'media/'.length;
            return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
        }

    };

    img.src = url;
    return url;

}



export default getCroppedImageUrl;