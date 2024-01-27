import ReactPlayer, { Config } from 'react-player/lazy';

export default function Player() {
  const config: Config = {
    youtube: {
      playerVars: {
        autoplay: 1,
      },
    },
  };

  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=BEXL80LS0-I' config={config} controls loop />
  );
}
