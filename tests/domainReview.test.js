import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 55, slack: 51, drag: 17, confidence: 76 };
assert.equal(domainReviewScore(item), 186);
assert.equal(domainReviewLane(item), "ship");
