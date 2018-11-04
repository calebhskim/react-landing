import React from 'react';
import anime from 'animejs';

class Map extends React.Component {
  componentDidMount() {
    var timeline = anime.timeline();
    timeline
      .add({
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        duration: 3000,
        easing: 'easeInOutSine',
        strokeDashoffset: [anime.setDashoffset, 0],
        targets: '.map path',
      });
  }

  render() {
    return (
      <div className='animation map'>
        <svg width="135" height="90" viewBox="0 0 135 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M101.576 76.3763C93.204 65.5559 76.2515 39.2173 101.576 39.4284C126.9 39.6396 106.808 68.7228 101.576 76.3763Z" fill="#EF1010" stroke="black" strokeWidth="3"/>
          <path d="M107.159 51.8321C107.159 55.2235 104.436 57.9578 101.095 57.9578C97.7549 57.9578 95.0319 55.2235 95.0319 51.8321C95.0319 48.4408 97.7549 45.7065 101.095 45.7065C104.436 45.7065 107.159 48.4408 107.159 51.8321Z" fill="white" stroke="black" strokeWidth="3"/>
          <path d="M20.8196 11.3458H116.242M17.8071 23.3603H32.8696L25.7106 87.461M119.116 23.3603H46.928L42.2361 87.461" stroke="black" strokeWidth="3"/>
          <path d="M2 88.2H21.9538H41.1686H115.564H132.8L121.521 33.9462L119.643 23.561L115.564 1H54.9639H38.7052H21.9538L16.7912 23.561L14.4148 33.9462L2 88.2Z" stroke="black" strokeWidth="3"/>
        </svg>
      </div>
    );
  }
}

export default Map;
