import React from 'react';
import anime from 'animejs';

class Chat extends React.Component {
  componentDidMount() {
    var timeline = anime.timeline();
    var messageTimeline = anime.timeline({
      loop: true,
    });
    timeline
      .add({
        easing: 'linear',
        opacity: 1.0,
        targets: '.chat .one',
      })
      .add({
        duration: 750,
        easing: 'linear',
        opacity: 1.0,
        targets: '.chat .two',
      })
      .add({
        duration: 750,
        easing: 'linear',
        opacity: 1.0,
        targets: '.chat .three',
      })
      .add({
        duration: 750,
        easing: 'linear',
        opacity: 1.0,
        targets: '.chat .four',
      });

    messageTimeline
      .add({
        delay: (el, i) => (i * 200),
        duration: 250,
        easing: 'easeOutExpo',
        r: 3,
        targets: '.chat #one',
      })
      .add({
        delay: (el, i) => (i * 200),
        duration: 250,
        easing: 'easeOutExpo',
        r: 2,
        targets: '.chat #one',
      })
      .add({
        delay: (el, i) => (i * 200),
        duration: 250,
        easing: 'easeOutExpo',
        r: 3,
        targets: '.chat #two',
      })
      .add({
        delay: (el, i) => (i * 200),
        duration: 250,
        easing: 'easeOutExpo',
        r: 2,
        targets: '.chat #two',
      })
      .add({
        delay: (el, i) => (i * 200),
        duration: 250,
        easing: 'easeOutExpo',
        r: 3,
        targets: '.chat #three',
      })
      .add({
        delay: (el, i) => (i * 200),
        duration: 250,
        easing: 'easeOutExpo',
        r: 2,
        targets: '.chat #three',
      });
  }

  render() {
    return (
      <div className='animation chat'>
        <svg width="125" height="165" viewBox="0 0 125 165" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className='one'>
            <rect x="25" y="17" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
            <path d="M25 37.5C25 36.1193 26.1193 35 27.5 35H47.5C48.8807 35 50 36.1193 50 37.5V37.5C50 38.8807 48.8807 40 47.5 40H27.5C26.1193 40 25 38.8807 25 37.5V37.5Z" fill="#C4C4C4"/>
            <rect x="25" y="26" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
            <circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
          </g>
          <g className='two'>
            <rect x="25" y="65" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
            <path d="M25 85.5C25 84.1193 26.1193 83 27.5 83H47.5C48.8807 83 50 84.1193 50 85.5V85.5C50 86.8807 48.8807 88 47.5 88H27.5C26.1193 88 25 86.8807 25 85.5V85.5Z" fill="#C4C4C4"/>
            <rect x="25" y="74" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
            <circle cx="10" cy="58" r="10" fill="#C4C4C4"/>
          </g>
          <g className='three'>
            <rect x="25" y="113" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
            <path d="M25 133.5C25 132.119 26.1193 131 27.5 131H47.5C48.8807 131 50 132.119 50 133.5V133.5C50 134.881 48.8807 136 47.5 136H27.5C26.1193 136 25 134.881 25 133.5V133.5Z" fill="#C4C4C4"/>
            <rect x="25" y="122" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
            <circle cx="10" cy="106" r="10" fill="#C4C4C4"/>
          </g>
          <g className='four'>
            <rect x="94" y="155" width="30" height="10" rx="4" fill="#C4C4C4"/>
            <circle id='one' cx="116" cy="160" r="2" fill="white"/>
            <circle id='two' cx="109" cy="160" r="2" fill="white"/>
            <circle id='three' cx="102" cy="160" r="2" fill="white"/>
          </g>
        </svg>
      </div>
    );
  }
}

export default Chat;
