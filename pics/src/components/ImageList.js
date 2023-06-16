import React, { Fragment } from 'react'
import ImageShow from './ImageShow'

const ImageList = ({ images }) => {
    const renderdImages = images.map((image,index) => {
        return <Fragment key={index}>
            <ImageShow image={image} />
        </Fragment>
    });

    return (
        <div>{renderdImages}</div>
    )
}

export default ImageList