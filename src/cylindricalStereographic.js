import {atan, cos, tan} from "./math";
import parallel1Projection from "./parallel1";

export function cylindricalStereographicRaw(phi0) {
  var cosPhi0 = cos(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, (1 + cosPhi0) * tan(phi / 2)];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, atan(y / (1 + cosPhi0)) * 2];
  };

  return forward;
}

export default function() {
  return parallel1Projection(cylindricalStereographicRaw).scale(120);
}
