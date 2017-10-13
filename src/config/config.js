import { color } from './voxelStore.js'; 

const controls = {
  discreteFire: true,
};

const ws = {
  url: 'wss://turg-svc.herokuapp.com/v1/ws/',
  range: 70,
}

const options = {
  chunkDistance: 2,
  generate: (x, y, z) => y === 0,
  lightsDisabled: true,
  materials: color,
  materialFlatColor: true,
  worldOrigin: [500, 10, 500],
  worldSize: [1000, 100, 1000],
  startingPosition: [500, 30, 500],
  playerHeight: 2,
  controls,
  ws,
}

export default options;