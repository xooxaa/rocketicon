import { rocketParts } from "./rocketParts.js";
import { rocketColors } from "./colors.js";
import { hashInput, mapHashToIndices } from "./hashUtils.js";

export function generateRocketSVG(input) {
  const hash = hashInput(input);

  const [noseIndex, bodyIndex, finIndex, exhaustIndex, noseColorIndex, bodyColorIndex, finColorIndex, exhaustColorIndex] = mapHashToIndices(hash, [
    rocketParts.bodies.length,
    rocketParts.noses.length,
    rocketParts.fins.length,
    rocketParts.exhausts.length,
    rocketColors.noses.length,
    rocketColors.bodies.length,
    rocketColors.fins.length,
    rocketColors.exhausts.length,
  ]);

  const body = rocketParts.bodies[bodyIndex];
  const nose = rocketParts.noses[noseIndex];
  const fins = rocketParts.fins[finIndex];
  const exhaust = rocketParts.exhausts[exhaustIndex];
  const bodyColor = rocketColors.bodies[bodyColorIndex];
  const noseColor = rocketColors.noses[noseColorIndex];
  const finsColor = rocketColors.fins[finColorIndex];
  const exhaustColor = rocketColors.exhausts[exhaustColorIndex];

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" stroke="#000000">
  <path d="${fins}" fill="${finsColor}" />
  <path d="${exhaust}" fill="${exhaustColor}" />
  <path d="${body}" fill="${bodyColor}" />
  <path d="${nose}" fill="${noseColor}" />
</svg>
  `;
}
