import io from 'socket.io-client';

/// TODO: make this configurable on GUI
const ENDPOINT = "http://localhost:8083/status_updates"

export const socket = io.connect(ENDPOINT);