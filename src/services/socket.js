/* global SOCKET_HOST */
import io from 'socket.io-client';

const socket = io("192.168.10.114:5000");
export default socket;

// import io from "socket.io-client/dist/socket.io.js";

// const socket = io('http://localhost:5000', { jsonp: false });