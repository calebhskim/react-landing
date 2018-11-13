import React from 'react';
import anime from 'animejs';

class Resume extends React.Component {
  componentDidMount() {
    var timeline = anime.timeline();
    timeline
      .add({
        easing: 'linear',
        opacity: 1.0,
        targets: '.resume .one',
      })
      .add({
        easing: 'linear',
        opacity: 1.0,
        targets: '.resume .two',
      })
      .add({
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        easing: 'easeInOutSine',
        strokeDashoffset: [anime.setDashoffset, 0],
        targets: '.resume .check',
      })
      .add({
        duration: 2000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        easing: 'easeInOutSine',
        strokeDashoffset: [anime.setDashoffset, 0],
        targets: '.checkline path',
      });
  }

  render() {
    return (
      <div className='animation resume'>
        <svg width="129" height="119" viewBox="0 0 129 119" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="one" cx="10" cy="10" r="10" fill="#C4C4C4"/>
          <path className="one" d="M23 9.5C23 8.11929 24.1193 7 25.5 7H47.5C48.8807 7 50 8.11929 50 9.5V9.5C50 10.8807 48.8807 12 47.5 12H25.5C24.1193 12 23 10.8807 23 9.5V9.5Z" fill="#C4C4C4"/>
          <path className="one" d="M23 17.5C23 16.1193 24.1193 15 25.5 15H47.5C48.8807 15 50 16.1193 50 17.5V17.5C50 18.8807 48.8807 20 47.5 20H25.5C24.1193 20 23 18.8807 23 17.5V17.5Z" fill="#C4C4C4"/>
          <rect className="two" x="23" y="27" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
          <rect className="two" x="23" y="38" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
          <rect className="two" x="23" y="90" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
          <rect className="two" x="23" y="79" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
          <rect className="two" x="23" y="69" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
          <rect className="two" x="23" y="59" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
          <rect className="two" x="23" y="49" width="100" height="5" rx="2.5" fill="#C4C4C4"/>
          <path className="two" d="M23 103.5C23 102.119 24.1193 101 25.5 101H45.5C46.8807 101 48 102.119 48 103.5V103.5C48 104.881 46.8807 106 45.5 106H25.5C24.1193 106 23 104.881 23 103.5V103.5Z" fill="#C4C4C4"/>
          <path className="checkline" d="M116.707 115.021C116.317 114.63 116.317 113.997 116.707 113.607L126.607 103.707C126.997 103.317 127.63 103.317 128.021 103.707V103.707C128.411 104.098 128.411 104.731 128.021 105.121L118.121 115.021C117.731 115.411 117.098 115.411 116.707 115.021V115.021Z" fill="#8DDD67"/>
          <path className="checkline" d="M111.707 108.707C112.098 108.317 112.731 108.317 113.121 108.707L117.969 113.555C118.359 113.945 118.359 114.578 117.969 114.969V114.969C117.578 115.359 116.945 115.359 116.555 114.969L111.707 110.121C111.317 109.731 111.317 109.098 111.707 108.707V108.707Z" fill="#8DDD67"/>
          <circle className="check" cx="117.5" cy="110.5" r="8" stroke="#8DDD67"/>
        </svg>
      </div>
    );
  }
}

export default Resume;
