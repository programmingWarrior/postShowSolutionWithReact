import React, { useState, useEffect } from 'react';
import fakeData from '../fakeData';
import Picture from './Picture/Picture';
const Pictures = () => {
    const pic = fakeData;
    const [images, setImages] = useState(pic);
   
    
    return (
        <div>
            {
                images.map(img=><Picture img={img} key={img.id}></Picture>)
            }
        </div>
    );
};

export default Pictures;