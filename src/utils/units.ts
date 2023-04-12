type Unit = number | string;

export const convertToPx = (unit: Unit) => {
  return typeof unit === "number" ? `${unit}px` : unit;
};
