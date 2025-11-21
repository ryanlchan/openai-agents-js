import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
} from 'react-native-webrtc';

export const WebSocket = global.WebSocket;
export const isBrowserEnvironment = (): boolean => false;
export const useWebSocketProtocols = true;

export {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
};
export const createAudioElement = (): HTMLAudioElement => {
  return {
    autoplay: true,
    srcObject: null,
  } as unknown as HTMLAudioElement;
};
