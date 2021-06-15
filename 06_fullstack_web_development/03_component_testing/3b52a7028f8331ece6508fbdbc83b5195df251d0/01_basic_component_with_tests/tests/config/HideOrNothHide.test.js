import { openBrowser, closeBrowser, goto, text, click, button } from "taiko";
import "regenerator-runtime/runtime";

describe("Open website and check elements", () => {
  jest.setTimeout(40000);

  beforeAll(async () => {
    await openBrowser({ headless: true });
  });
  afterAll(async () => {
    await closeBrowser();
  });

  test("check that when launching the page, the paragraph 'This is my text' is present", async () => {
    expect.assertions(1);

    await goto("http://localhost:8080");

    expect(await text("This is my text").exists()).toBeTruthy();
  });

  test("click on the 'Hide content' button", async () => {
    expect.assertions(1);

    await goto("http://localhost:8080");

    await click(button("Hide Content"));

    expect(await button("Hide Content").exists()).toBe(false);
  });

  test("check that the paragraph is no longer there", async () => {
    expect.assertions(1);

    await goto("http://localhost:8080");

    await click(button("Hide Content"));

    expect(await text("This is my text").exists()).toBe(false);
  });

  test("click on the 'Reveal content' button", async () => {
    expect.assertions(1);

    await goto("http://localhost:8080");

    await click(button("Hide Content"));

    await click(button("Reveal Content"));

    expect(await button("Reveal Content").exists()).toBe(false);
  });

  test("check that the paragraph is there again", async () => {
    expect.assertions(1);

    await goto("http://localhost:8080");

    await click(button("Hide Content"));

    await click(button("Reveal Content"));

    expect(await text("This is my text").exists()).toBe(true);
  });
});
