import assert from "node:assert";
import { describe, it } from "node:test";
import { dummy } from "..";

describe("Index tests", () => {
	it("test dummy function", () => {
		assert.equal(dummy(), true);
	});
});
