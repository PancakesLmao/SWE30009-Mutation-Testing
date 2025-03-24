import { cycleSort } from "./cycle_sort";

test("Sorts an array correctly", () => {
  const arr = [4, 3, 2, 1];
  cycleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4]);
});