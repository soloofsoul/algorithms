/*
Given a square chessboard of N x N size, the position of Knight and position of a target is given.
We need to find out the minimum steps a Knight will take to reach the target position.
 */

const knightMoves = [
  [-2, -1],
  [2, -1],
  [-2, 1],
  [2, 1],
  [-1, 2],
  [1, 2],
  [-1, -2],
  [1, -2]
];
let visitedCells = [];
let paths = [];

const goThrough = (point, targetPos, N, path, visitedCells) => {
  knightMoves.forEach(offset => {
    const pointPath = [...path];
    const newPoint = [point[0] + offset[0], point[1] + offset[1]];
    const isValidNewPoint = !(newPoint[0] < 1 || newPoint[1] < 1 || newPoint[0] > N || newPoint[1] > N);

    if (isValidNewPoint) {
      const cellStrCoords = `${newPoint[0]}${newPoint[1]}`;
      const isPointVisited = visitedCells.includes(cellStrCoords);

      if (!isPointVisited) {
        const isTargetPoint = newPoint[0] === targetPos[0] && newPoint[1] === targetPos[1];
        pointPath.push(newPoint);

        if (isTargetPoint) {
          if (paths.length === 0) {
            paths = [pointPath];
          } else {
            if(pointPath.length === paths[0].length) {
              paths.push(pointPath);
            } else if (pointPath.length < paths[0].length) {
              paths = [pointPath];
            }
          }
        } else {
          const localVisitedCells = [...visitedCells];
          localVisitedCells.push(cellStrCoords);
          goThrough(newPoint, targetPos, N, pointPath, localVisitedCells);
        }
      }
    }
  });
};

const minStepToReachTarget = (knightPos, targetPos, N) => {
  const path = [knightPos];
  visitedCells.push(`${knightPos[0]}${knightPos[1]}`);

  if (knightPos[0] === targetPos[0] && knightPos[1] === targetPos[1]) {
    return [knightPos];
  } else {
    goThrough(knightPos, targetPos, N, path, visitedCells);
  }

  return [];
};

console.log(minStepToReachTarget([4,1], [1,3], 6));