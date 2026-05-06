export function domainReviewScore(item) {
  return item.signal * 2 + item.slack + item.confidence - item.drag * 3;
}

export function domainReviewLane(item) {
  const score = domainReviewScore(item);
  if (score >= 140) return "ship";
  if (score >= 105) return "watch";
  return "hold";
}
