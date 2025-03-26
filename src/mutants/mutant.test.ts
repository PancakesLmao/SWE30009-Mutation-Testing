import { cycleSort } from "./5"

// MR1 Test group
test("Sorts an array correctly", () => {
  const arr = [4, 1, 3, 2];
  cycleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4]);
});

test("Sorts an array correctly", () => {
  const arr = [40, 10, 50, 30, 20];
  cycleSort(arr);
  expect(arr).toEqual([10, 20, 30, 40, 50]);
});
test("Sorts an array correctly", () => {
  const arr = [9, 6, 7, 8, 5];
  cycleSort(arr);
  expect(arr).toEqual([5, 6, 7, 8, 9]);
});
test("Sorts an array correctly", () => {
  const arr = [75, 100, 50, 25];
  cycleSort(arr);
  expect(arr).toEqual([25, 50, 75, 100]);
});
test("Sorts an array correctly", () => {
  const arr = [6, 4, 7, 1, 3, 9];
  cycleSort(arr);
  expect(arr).toEqual([1, 3, 4, 6, 7, 9]);
});
// // MR2 Test group
test("Sorts an array correctly", () => {
  const arr = [4, -1, 5, -2, 3];
  cycleSort(arr);
  expect(arr).toEqual([-2, -1, 3, 4, 5]);
});
test("Sorts an array correctly", () => {
  const arr = [0, -30, 40, 20, -10];
  cycleSort(arr);
  expect(arr).toEqual([-30, -10, 0, 20, 40]);
});
test("Sorts an array correctly", () => {
  const arr = [900, -113, 75, -1, 52];
  cycleSort(arr);
  expect(arr).toEqual([-113, -1, 52, 75, 900]);
});
test("Sorts an array correctly", () => {
  const arr = [-2, -4, -8, -1, -6];
  cycleSort(arr);
  expect(arr).toEqual([-8, -6, -4, -2, -1]);
});
test("Sorts an array correctly", () => {
  const arr = [12, -15, 0, 11, -13];
  cycleSort(arr);
  expect(arr).toEqual([-15, -13, 0, 11, 12]);
});
// // MR3 Test Group
test("Sorts an array correctly", () => {
  const arr = [4, 3, 5, 3, 2];
  cycleSort(arr);
  expect(arr).toEqual([2, 3, 3, 4, 5]);
});
test("Sorts an array correctly", () => {
  const arr = [40, 10, 20, 20, 10];
  cycleSort(arr);
  expect(arr).toEqual([10, 10, 20, 20, 40]);
});
test("Sorts an array correctly", () => {
  const arr = [9, 3, 7, 1, 5, 3];
  cycleSort(arr);
  expect(arr).toEqual([1, 3, 3, 5, 7, 9]);
});
test("Sorts an array correctly", () => {
  const arr = [1, 1, 1, 1, 1, 1];
  cycleSort(arr);
  expect(arr).toEqual([1, 1, 1, 1, 1, 1]);
});
test("Sorts an array correctly", () => {
  const arr = [12, 15, 11, 12, 11];
  cycleSort(arr);
  expect(arr).toEqual([11, 11, 12, 12, 15]);
});
// Edge cases
test("Sorts an array correctly", () => {
  const arr = [3];
  cycleSort(arr);
  expect(arr).toEqual([3]);
});
test("Sorts an array correctly", () => {
  const arr = [];
  cycleSort(arr);
  expect(arr).toEqual([]);
});
