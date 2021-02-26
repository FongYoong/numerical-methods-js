import {
  parse, format
} from 'mathjs';

export function formatMatrixLatex(value) {
  //let v = parse(value);
  //return v.toTex({parenthesis: "keep", implicit: "hide"});
  value = parseFloat(value);
  return format(value, {precision: 4});
}

export function formatLatex(value) {
  //let v = parse(value);
  //return v.toTex({parenthesis: "keep", implicit: "hide"});
  return format(value, {precision: 6});
}
export function mathjsToLatex(value) {
  return value.toTex({precision: 4, implicit: "hide"});
}

export function generatePath(categoryPath="", methodPath="") {
    if (categoryPath) {
      return `/${categoryPath}/${methodPath}`;
    }
    return `/`;
}

export function isValidMath(value) {
  if (!value) {
    return false;
  }
  else if (value.hasOwnProperty("value")) {
    if (value.value) {
      return true;
    }
    return false;
  }
  else if (value.hasOwnProperty("implicit")) {
    return true;
  }
  return false;
}

export const mathjsKeywords = ["cos", "sin", "e"];

export const gaussPoints = {
  2: {
    c:[1, 1],
    x:[-0.57735027, 0.57735027]
  },
  3: {
    c:[0.5555556, 0.8888889, 0.5555556],
    x:[-0.77459667, 0, 0.77459667]
  },
  4: {
    c:[0.3478548, 0.6521452, 0.6521452, 0.3478548],
    x:[-0.86113631, -0.33998104, 0.33998104, 0.86113631]
  },
  5: {
    c:[0.2369269, 0.4786287, 0.5688889, 0.4786287, 0.2369269],
    x:[-0.90617985, -0.53846931, 0, 0.53846931, 0.90617985]
  },
  6: {
    c:[0.1713245, 0.3607616, 0.4679139, 0.4679139, 0.3607616, 0.1713245],
    x:[-0.93246951, -0.66120938, -0.23861919, 0.23861919, 0.66120938, 0.93246951]
  },
};
