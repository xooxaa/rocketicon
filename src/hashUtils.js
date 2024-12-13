import crypto from "crypto";

export function hashInput(input) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

export function mapHashToIndices(hash, ranges) {
  return ranges.map((range, i) => parseInt(hash.slice(i * 2, i * 2 + 2), 16) % range);
}
