import React, { useState } from 'react';
import MapGL, {Image, Layer, Source} from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import s from './Map.module.scss'
import stork from '../assets/png/stork.png'


const Map = () => {

    const [newPosition, setNewPosition] = useState<any>({position:"relative"})

    const onMouseEnterHandler = () => {
        setNewPosition({position:"revert"})
    }

    const onMouseLeaveHandler = () => {
        setNewPosition({position:"relative"})
    }


    const [viewport, setViewport] = useState({
        latitude:  53.922576358032096,
        longitude: 27.62559200554355,
        zoom: 14
    });
    const data = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: [27.62559200554355, 53.922576358032096]
                }
            }
        ]
    };

    // const imageURL =
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png';

    return (
        <div className={s.mapContainer} style={newPosition} onClick={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            {/*<div className={s.info}>123123</div>*/}
            <MapGL
                style={{ width: '100%', height: '35vh'}}
                mapStyle='mapbox://styles/mapbox/light-v9'
                accessToken={"pk.eyJ1IjoibmF6YXJ1ay1kIiwiYSI6ImNsODk2NGI1azA0MWQzcG4zaGNjYjdibXMifQ.tDSjX8uOrU35vU8aZ-04wQ"}
                onViewportChange={setViewport}
                {...viewport}
            >
                <Source id='point' type='geojson' data={data} />
                <Image id='my-image' image={stork} />
                <Layer
                    id='image-layer'
                    type='symbol'
                    source='point'
                    layout={{
                        'icon-image': 'my-image',
                        'icon-size': 0.25
                    }}
                />
            </MapGL>
        </div>
    );
};

export default Map;