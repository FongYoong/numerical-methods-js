import {
  parse, format
} from 'mathjs';

export function formatLatex(value) {
  //let v = parse(value);
  //return v.toTex({parenthesis: "keep", implicit: "hide"});
  return format(value, {notation: 'fixed', precision: 6});
}
export function mathjsToLatex(value) {
  return value.toTex({parenthesis: "keep"});
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
