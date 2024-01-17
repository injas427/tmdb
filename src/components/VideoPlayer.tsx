import React, { useState, useCallback } from 'react';
import { Button, View, Alert, Modal } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export const VideoPlayer = ({
  isVisible = false,
  videoId = '',
  onVideoClose = () => { },
}: {
  isVisible: boolean;
  videoId: string;
  onVideoClose: () => void;
}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      onVideoClose();
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Modal visible={isVisible} style={{ flex: 1 }} onRequestClose={onVideoClose}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
      </View>
    </Modal>
  );
};
