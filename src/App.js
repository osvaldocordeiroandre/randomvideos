import React from 'react'

export default function App() {

  const VideosUrl = [

    'https://www.youtube.com/watch?v=tcA66TUoxqs',
    'https://www.youtube.com/watch?v=lvj3uioKVjk',
    'https://www.youtube.com/watch?v=HoTbtvF1iSw',
    'https://youtu.be/QrZQLuJj2TE?t=380',
    'https://www.youtube.com/watch?v=ettaeKZHAwA',
    'https://youtu.be/yhtLGnExKYk?t=2752',
    'https://www.youtube.com/watch?v=bQ-E2pWC-cE',
    'https://www.youtube.com/watch?v=to8yh83jlXg',
    'https://www.youtube.com/watch?v=a-GqSWsISVs',
    'https://www.youtube.com/watch?v=wcG8jgU4-8A',
    'https://www.youtube.com/watch?v=v3jti86s8RM',
    'https://youtu.be/LPULcrW1gc0?t=6',
    'https://www.youtube.com/watch?v=FMj4kj3oSc0',
    'https://www.youtube.com/watch?v=gho9DNAY52g',
    'https://www.youtube.com/watch?v=b393rRjMIm8',
    'https://www.youtube.com/watch?v=ZZ5LpwO-An4',
    'https://www.youtube.com/watch?v=wNkSIhRKAS4',
    'https://www.youtube.com/watch?v=TMO4NH8HAHQ',
    'https://www.youtube.com/watch?v=9xEvh1ForDE',
    'https://www.youtube.com/watch?v=BBSqiqqt_7E',
    'https://www.youtube.com/watch?v=XfqOB4hvxlY',
    'https://www.youtube.com/watch?v=SrT9PiCzEC4',
    'https://www.youtube.com/watch?v=oyY1ifuyUD0',
    'https://www.youtube.com/watch?v=7BqLKGJZ9lI',
    'https://www.youtube.com/watch?v=XWP24qoWxyM',
    'https://www.youtube.com/watch?v=1tpIxo4vy80',
    'https://www.youtube.com/watch?v=CzwVoc1MsGo',
    'https://www.youtube.com/watch?v=NoMTPeRPVgw',
    'https://www.youtube.com/watch?v=r5_NvFTfAWc',
    'https://www.youtube.com/watch?v=fogmhYmSI-8',
    'https://www.youtube.com/watch?v=o1gRV9zjAYQ',
    'https://www.youtube.com/watch?v=WPlrfmxYmNc',
    'https://youtu.be/0PiqqbyQRoo?t=16',
    'https://www.youtube.com/watch?v=CLbidRKGyb0',
    'https://www.youtube.com/watch?v=THgySrS02wM',
    'https://www.youtube.com/watch?v=lrTeLurUybQ',
    'https://www.youtube.com/watch?v=69xc-OMHt84',
    'https://www.youtube.com/watch?v=bwskO02Bj7k'

  ];

  const handleClick = () => {

    const randomVideosIndex = Math.floor(Math.random() * VideosUrl.length);
    const randomVideosUrl = VideosUrl[randomVideosIndex];
    window.open(randomVideosUrl, '_blank');

  }

  return (
    <div className='container'>

      <button onClick={handleClick}> Vamos ver o que virá 👀</button>

    </div>
  )
}
