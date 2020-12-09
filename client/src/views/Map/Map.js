import React from 'react';
import html from './Map.html'


function Map() {
    return (
        <div dangerouslySetInnerHTML={ {__html: html} } />
    );
}

export default Map;
