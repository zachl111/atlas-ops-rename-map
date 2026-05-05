import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 68,
    "capacity": 83,
    "latency": 8,
    "risk": 25,
    "weight": 12,
    "score": 97,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 82,
    "capacity": 70,
    "latency": 17,
    "risk": 10,
    "weight": 5,
    "score": 131,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 83,
    "capacity": 71,
    "latency": 27,
    "risk": 14,
    "weight": 13,
    "score": 110,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
