import assert from "node:assert/strict";
import { gtagBootstrap, parseGtagId } from "./analytics.ts";

assert.equal(parseGtagId("G-ABC123XYZ"), "G-ABC123XYZ");
assert.equal(parseGtagId(undefined), undefined);
assert.equal(parseGtagId(""), undefined);
assert.equal(parseGtagId("UA-12345-1"), undefined);
assert.equal(parseGtagId("g-abc123"), undefined);
assert.equal(parseGtagId('G-ABC");alert(1);//'), undefined);

const script = gtagBootstrap("G-ABC123XYZ");
assert.ok(script.includes('gtag("config","G-ABC123XYZ")'));
assert.ok(script.includes('analytics_storage:consent'));
assert.ok(script.includes('ad_storage:"denied"'));
assert.ok(
  script.indexOf('gtag("consent","default"') < script.indexOf('gtag("config"'),
  "consent defaults must be set before config",
);

console.log("analytics checks passed");
