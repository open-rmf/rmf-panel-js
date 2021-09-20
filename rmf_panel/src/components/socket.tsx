import io from 'socket.io-client';

const ENDPOINT = "http://localhost:8080/status_updates"

export const socket = io.connect(ENDPOINT);