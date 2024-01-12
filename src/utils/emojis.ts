export const emojiCodePoints = {
  notAvailable: "\u274C",
  plane: "\u2708\uFE0F",
  planeDeparture: "\uD83D\uDEEB",
  planeArrival: "\uD83D\uDEEC",
};

export const getFlagEmoji = (countryCode: string | undefined) => {
  const OFFSET = 127397;
  return countryCode === undefined
    ? emojiCodePoints.notAvailable
    : countryCode
        .split("")
        .map((char) => String.fromCodePoint(char.charCodeAt(0) + OFFSET))
        .join("");
};
