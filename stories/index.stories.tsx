import '@storybook/addon-console';

import * as React from 'react';

import { Controls } from '../src/Controls';
import { Player } from '../src/Player';

export default {
  title: 'Components',
  parameters: {
    info: { inline: true },
  },
};

export const LottiePlayer = () => {
  const onEvent = (event: any) => {
    console.log('event', event);
  };
  return (
    <div style={{ width: '374px' }}>
      <Player
        src="https://assets1.lottiefiles.com/packages/lf20_ybj0fjlo.json"
        hover
        loop
        background="#ffffff"
        style={{ height: '300px' }}
        renderer="svg"
        onEvent={onEvent}
        className="test"
        keepLastFrame={true}
        initialSegment={[24, 25]}
      >
        <Controls
          transparentTheme={true}
          showLabels={true}
          visible={true}
          buttons={['play', 'repeat', 'frame', 'debug', 'snapshot', 'background', 'stop']}
        />
      </Player>
    </div>
  );
};
