import { renderHook } from "@testing-library/react-hooks";
import useAPI from "./useAPI";

// Mocking fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ exampleData: "test" }),
  })
);

describe("useAPI", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("fetches data from the API and returns it", async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const { result, waitForNextUpdate } = renderHook(() =>
      useAPI({ url, onError: jest.fn() })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    // expect(result.current.data).toEqual({ exampleData: "test" });
    expect(result.current.error).toBe(null);
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it("handles API call error and sets error state", async () => {
    const url = "/test-api";
    const onError = jest.fn();
    fetch.mockRejectedValueOnce(new Error("API Error"));

    const { result, waitForNextUpdate } = renderHook(() =>
      useAPI({ url, onError })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toEqual(new Error("API Error"));
    expect(onError).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});
