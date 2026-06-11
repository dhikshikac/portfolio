// Coordinates mapped to work-sky.svg viewBox (0 0 1920 1024)
const SKY_VIEWBOX = '0 0 1920 1024';

export const CONSTELLATIONS = {
  aquila: {
    name: 'Aquila',
    viewBox: SKY_VIEWBOX,
    // Traced from Group_2 reference: hub, left hook chain, bottom path, right wing
    nodes: [
      { x: 1239.4, y: 193.0 },
      { x: 1001.7, y: 328.9 },
      { x: 1191.8, y: 305.0 },
      { x: 1106.3, y: 72.9 },
      { x: 1077.8, y: 129.0 },
      { x: 1064.5, y: 193.0 },
      { x: 1315.4, y: 0.9 },
      { x: 1363.0, y: 337.0 },
    ],
    edges: [
      [0, 3], [3, 4], [4, 5],
      [0, 1], [1, 2], [2, 7],
      [0, 7], [0, 6], [6, 7],
    ],
  },
  pisces: {
    name: 'Pisces',
    viewBox: SKY_VIEWBOX,
    // Traced from Group_1 reference: V-vertex, up-arm triangle, right-arm circlet
    nodes: [
      { x: 1285.2, y: 566.9 },
      { x: 1336.8, y: 509.9 },
      { x: 1380.1, y: 452.8 },
      { x: 1433.0, y: 363.1 },
      { x: 1440.2, y: 309.0 },
      { x: 1417.9, y: 334.6 },
      { x: 1433.0, y: 363.1 },
      { x: 1345.7, y: 546.9 },
      { x: 1533.4, y: 540.3 },
      { x: 1633.8, y: 537.7 },
      { x: 1718.7, y: 538.3 },
      { x: 1749.7, y: 566.2 },
      { x: 1683.3, y: 547.3 },
      { x: 1683.1, y: 585.4 },
      { x: 1726.1, y: 588.7 },
    ],
    edges: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 4],
      [0, 7], [7, 8], [8, 9], [9, 12],
      [12, 10], [10, 11], [11, 14], [14, 13], [13, 12],
    ],
  },
  delphinus: {
    name: 'Delphinus',
    viewBox: SKY_VIEWBOX,
    // Traced from Group_3 reference: tilted diamond + tail from bottom-right
    nodes: [
      { x: 1617.9, y: 199.1 },
      { x: 1711.6, y: 202.2 },
      { x: 1640.5, y: 244.6 },
      { x: 1738.9, y: 247.4 },
      { x: 1841.0, y: 431.8 },
    ],
    edges: [
      [0, 1], [0, 2], [1, 3], [2, 3], [3, 4],
    ],
  },
};

export const HERO_CONSTELLATIONS = ['aquila', 'pisces', 'delphinus'];

export const SKY_DIMENSIONS = { width: 1920, height: 1024 };
