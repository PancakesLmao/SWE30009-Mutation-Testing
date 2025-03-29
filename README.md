This repo used source code from https://github.com/TheAlgorithms/TypeScript/blob/master/sorts/cycle_sort.ts for testing purposes.

# Mutation Testing with StrykerJS for TypeScript

How to set up **mutation testing** for a **TypeScript** program (`cycle_sort.ts`) using **StrykerJS**.


## 1. Initialize a TypeScript Project
Navigate to your project directory and run:
```
npm init -y
```

## 2. Install StrykerJS and Dependencies
Run:
```
npm install --save-dev @stryker-mutator/core @stryker-mutator/typescript @stryker-mutator/jest-runner jest ts-jest @types/jest
```

## 3. Configure Jest for TypeScript
Create `jest.config.js` in the project root:
```js
/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

## 4. Initialize Stryker
Run:
```sh
npx stryker init
```
Choose:
- **Test runner:** `jest`
- **Test framework:** `jest`
- **Mutate source files:** `src/cycle_sort.ts`
- **Reporters:** Choose `html`, `clear-text`, `progress`
- **Mutation test report:** `report/mutation.html`
- **Checkers & transpilers:** Select `typescript`
- **Save configuration:** Yes

This generates `stryker.conf.json`/ `stryker.config.mjs`.

## 5. Modify Stryker Configuration
Ensure `stryker.conf.json`/ `stryker.config.mjs` looks like this:
```json
{
  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
  "mutate": ["src/cycle_sort.ts"],
  "testRunner": "jest",
  "jest": {
    "projectType": "custom",
    "configFile": "jest.config.js"
  },
  "reporters": ["progress", "clear-text", "html"],
  "coverageAnalysis": "perTest"
}
```

## 6. Write Jest Tests for `cycle_sort.ts`
Ensure `src/cycle_sort.test.ts` exists:
```typescript
import { cycleSort } from "./cycle_sort";

test("Sorts an array correctly", () => {
  const arr = [4, 3, 2, 1];
  cycleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4]);
});
```
Run tests to confirm they work:
```sh
npx jest
```

## 7. Run Mutation Testing
Execute:
```sh
npx stryker run
```

## 8. Review Mutation Test Report
After execution, check `reports/mutation/html/index.html` in a browser to analyze surviving mutants.

