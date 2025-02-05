import { rocketParts } from "./rocketParts.js";
import { hashInput, mapHashToIndices } from "./hashUtils.js";

export function generateRocketSVG(input) {
  const hash = hashInput(input);

  const [noseIndex, bodyIndex, finIndex, exhaustIndex] = mapHashToIndices(hash, [
    rocketParts.bodies.length,
    rocketParts.noses.length,
    rocketParts.fins.length,
    rocketParts.exhausts.length,
  ]);

  const body = rocketParts.bodies[bodyIndex];
  const nose = rocketParts.noses[noseIndex];
  const fins = rocketParts.fins[finIndex];
  const exhaust = rocketParts.exhausts[exhaustIndex];

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200" width="100" height="200">
      <path d="${body}" fill="#33C3FF" />
      <path d="${nose}" fill="#FF5733" />
      <path d="${fins}" fill="#FFC300" />
      <path d="${exhaust}" fill="#C70039" />
    </svg>
  `;
}
