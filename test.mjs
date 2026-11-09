import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {analyze} from "./analyze.mjs";
const sample = JSON.parse(readFileSync(new URL("./fixture.json", import.meta.url)));
assert.deepEqual(analyze(sample)["status"], "draft for review");
console.log("Fixture passed");
const comparison = {
  "incident": "cloud_exposure",
  "severity": "high",
  "lead": "Cloud IR lead",
  "evidence": [
    "Cloud audit event"
  ]
};
assert.deepEqual(analyze(comparison)["status"], "draft for review");
console.log("Comparison fixture passed");
