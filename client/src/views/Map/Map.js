import React from 'react';
import htmlContent from './Map.html'


function Home() {
    return (
        <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
    );
}

export default Map;
