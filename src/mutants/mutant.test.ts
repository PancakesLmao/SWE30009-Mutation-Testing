import { cycleSort } from "./2";

test("cycleSort should sort the array in ascending order", () => {
  const array = [5, 4, 3, 2, 1];
  const sorted = cycleSort(array);
  expect(sorted).toEqual([1, 2, 3, 4, 5]);
});