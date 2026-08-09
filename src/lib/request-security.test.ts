import { describe, expect, it } from "vitest";
import { isSameOrigin } from "@/lib/request-security";

describe("request security", () => {
  it("accepts same-origin and server requests", () => {
    expect(isSameOrigin(new Request("https://taco.test/api/admin", { method: "POST" }))).toBe(true);
    expect(isSameOrigin(new Request("https://taco.test/api/admin", { method: "POST", headers: { origin: "https://taco.test" } }))).toBe(true);
  });
  it("rejects cross-origin mutations", () => {
    expect(isSameOrigin(new Request("https://taco.test/api/admin", { method: "POST", headers: { origin: "https://evil.test" } }))).toBe(false);
  });
});
