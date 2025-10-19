import { isActivePath } from "../utils/isActivePath";


// UNIT test to verify isActivePath function
describe("isActivePath", () => {
    test("returns true when path starts with target", () => {
        expect(isActivePath("/games/123", "/games")).toBe(true);
    });

    test("returns false when path does not start with target", () => {
        expect(isActivePath("/courts", "/games")).toBe(false);
    });

    test("handles exact match correctly", () => {
        expect(isActivePath("/games", "/games")).toBe(true);
    });
});