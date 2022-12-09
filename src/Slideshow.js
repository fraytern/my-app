import ImageSlider from './ImageSlider';
import xmas7s from './Xmas7s.JPG';
import xmas7s1 from './Xmas7s1.JPG';
import bucknellgame from './bucknellgame.JPG';

const Slideshow = () =>{
    const slides = [
        {xmas7s},
        {xmas7s1},
        {bucknellgame}
    ];

    const containerStyles = {
        width:'500px',
        height: '280px',
        margin: '0 auto',
    };
  return(
    <div>
        <div style={containerStyles}>
        <ImageSlider slides={slides} />
        </div>
    </div>
  );
}

export default Slideshow;