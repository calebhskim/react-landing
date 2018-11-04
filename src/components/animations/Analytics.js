import React from 'react';
import anime from 'animejs';

class Analytics extends React.Component {
  componentDidMount() {
    var timeline = anime.timeline();
    timeline
      .add({
        easing: 'linear',
        opacity: 1.0,
        targets: '.analytics .one',
      })
      .add({
        duration: 750,
        easing: 'linear',
        opacity: 1.0,
        targets: '.analytics .two',
      })
      .add({
        duration: 750,
        easing: 'linear',
        opacity: 1.0,
        targets: '.analytics .three',
      })
      .add({
        duration: 750,
        easing: 'linear',
        opacity: 1.0,
        targets: '.analytics .four',
      })
      .add({
        duration: 3000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        easing: 'easeInOutSine',
        strokeDashoffset: [anime.setDashoffset, 0],
        targets: '.analytics path',
      });
  }

  render() {
    return (
      <div className='animation analytics'>
        <svg width="132" height="150" viewBox="0 0 132 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className='two' cx="117" cy="45" r="15" fill="black"/>
          <circle className='two' cx="15" cy="45" r="15" fill="black"/>
          <circle className='three' cx="117" cy="105" r="15" fill="black"/>
          <circle className='three' cx="15" cy="105" r="15" fill="black"/>
          <circle className='one' cx="65.4" cy="15" r="15" fill="black"/>
          <circle className='four'cx="65.4" cy="135" r="15" fill="black"/>
          <path d="M13.5 59.7V90M27.9 113.4L52.5 127.2M117.6 59.7V90M104.4 113.4L78.3 127.2M104.4 37.8L77.4 22.8M27.9 37.8L52.5 22.8" stroke="black" strokeWidth="5"/>
        </svg>
      </div>
    );
  }
}

export default Analytics;
