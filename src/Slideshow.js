/*import ImageSlider from './Web Pages/Components/ImageSlider';

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

import { useState, useEffect } from 'react';
import bucknellgame from './bucknellgame.JPG';

const Slideshow = ({imgs}) =>{
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

const next = () => {
  if (index===imgs.length -1){
    setIndex(0)
  } else{
    setIndex(index + 1)
  }
}

const prev = () => {
  if (index===0){
    setIndex(imgs.length -1)
  } else{
    setIndex(index - 1)
  }
}

return(
  <div className='slideshow'>
    <img className='mainImg' src={imgs[index]} />
    <div className='actions'>
      <button onClick={prev}>*</button>
      <button onClick={next}>*</button>
    </div>
  </div>
)
}

function SlidePics(){
  return <div className='slidepics'>
    <Slideshow imgs={[
      <img src={require(['./bucknellgame.JPG'])}/>,
      'https://static01.nyt.com/images/2022/05/12/sports/12rugby-action/merlin_196033614_1ba96641-398f-48ab-ac0d-9c053e174350-superJumbo.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/b7/New_Zealand_vs_South_Africa_2006_Tri_Nations_Line_Out.JPG'
    ]}></Slideshow>
  </div>
}

export default SlidePics;

*/

import React, { useState, useEffect } from 'react';
import xmas7s from './Xmas7s.JPG';
import xmas7s1 from './Xmas7s1.JPG';
import bucknellgame from './bucknellgame.JPG';

function SlidePics() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use the useEffect hook to change the current image index every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 4500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const images = [
    xmas7s,
    xmas7s1,
    bucknellgame,
  ];

  return (
    <img className='slideshow-display' src={images[currentImageIndex]} alt="Slideshow" />
  );
}

export default SlidePics;