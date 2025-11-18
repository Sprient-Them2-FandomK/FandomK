export const COLOR_VAR_MAP = {
  "--color-bg-dark": "#02000E",
  "--color-bg-base": "#181D26",

  "--color-gray-600": "#67666E",
  "--color-gray-500": "#828282",
  "--color-gray-400": "#8C92AB",
  "--color-gray-300": "#A3A5A8",

  "--color-primary": "#F96D69",
  "--color-secondary": "#FE5493",
  "--color-accent": "#DEC030",

  "--color-white-100": "#FFFFFF",
  "--color-white-90": "#F7F7F8",
};

/**
 * HEX 색상을 rgba로 변환
 * @param {string} hex - #fff, #ffff, #ffffff, #ffffffff
 * @param {number} [opacity] - 0 ~ 1 범위의 alpha 값(optional)
 */
export const hexToRgba = (hex, opacity = null) => {
  let value = hex.trim();
  if (value.startsWith("#")) {
    value = value.slice(1);
  }

  let r, g, b, a;

  if (value.length === 3) {
    // #rgb
    r = value[0] + value[0];
    g = value[1] + value[1];
    b = value[2] + value[2];
    a = "ff";
  } else if (value.length === 4) {
    // #rgba
    r = value[0] + value[0];
    g = value[1] + value[1];
    b = value[2] + value[2];
    a = value[3] + value[3];
  } else if (value.length === 6) {
    // #rrggbb
    r = value.slice(0, 2);
    g = value.slice(2, 4);
    b = value.slice(4, 6);
    a = "ff";
  } else if (value.length === 8) {
    // #rrggbbaa
    r = value.slice(0, 2);
    g = value.slice(2, 4);
    b = value.slice(4, 6);
    a = value.slice(6, 8);
  }

  const rDec = parseInt(r, 16);
  const gDec = parseInt(g, 16);
  const bDec = parseInt(b, 16);
  const aDec = parseInt(a, 16) / 255;

  // opacity 파라미터가 있으면 우선 적용
  const finalAlpha = opacity !== null ? opacity : Number(aDec.toFixed(3));

  return `rgba(${rDec}, ${gDec}, ${bDec}, ${finalAlpha})`;
};
