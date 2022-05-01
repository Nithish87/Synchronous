import { useEffect, useState } from 'react';
import HorizontalSlider from 'react-horizontal-slider';

const EventsMenu = ({events,title}) => {

    return (
            <div className="menuContents">
            <HorizontalSlider
                title={title}
                data={events}
                height={500}
                width={500}
                id={'1'}
            />
        </div>
        
    );
}

export default EventsMenu;