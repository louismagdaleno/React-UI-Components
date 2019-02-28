// required
import React from 'react';

// construct ImageThumbnail container that holds img
const ImageThumbnail = (props) => {
    return (
        <div className="imageThumbnail">
            <img src={props.src} alt="Lambda Logo" />
        </div>
    );
}

// export ImageThumbnail
export default ImageThumbnail;