
import HorizontalSlider from 'react-horizontal-slider';

const EventsMenu = ({events,title}) => {

    return (
            <HorizontalSlider 
                title={title}
                data={events}
                height={300}
                width={300}
                id={'1'}
            />
    );
}

export default EventsMenu;