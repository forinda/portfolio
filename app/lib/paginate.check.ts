import assert from "node:assert/strict";
import { paginate } from "./paginate.ts";

const items = Array.from({ length: 23 }, (_, index) => index);

assert.deepEqual(paginate(items, null, 10), {
  items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  page: 1,
  pageCount: 3,
});
assert.deepEqual(paginate(items, "3", 10), { items: [20, 21, 22], page: 3, pageCount: 3 });
assert.equal(paginate(items, "4", 10), null);
assert.equal(paginate(items, "0", 10), null);
assert.equal(paginate(items, "-1", 10), null);
assert.equal(paginate(items, "1.5", 10), null);
assert.equal(paginate(items, "abc", 10), null);
assert.equal(paginate(items, "", 10), null);
assert.deepEqual(paginate([], null, 10), { items: [], page: 1, pageCount: 1 });

console.log("paginate checks passed");
