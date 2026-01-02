export const CATEGORIES = new Map([
  ["food", "🍚 식비"],
  ["subscribe", "💧 구독"],
  ["life", "🏠 생활"],
  ["salary", "🏢 급여"],
  ["finance", "💰 금융"],
]);

export const getCategory = (targetCategory) => {
  const DEFAULT_KEY = "food";

  for (const [key, value] of CATEGORIES) {
    if (value === targetCategory) {
      return key;
    }
  }

  return DEFAULT_KEY;
};
