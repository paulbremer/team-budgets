import { allocateBudget } from "@/utils/allocateBudget";

const mockBudget = {
  id: "1",
  title: "test budget",
  startDate: new Date("2024-09-01"),
  endDate: new Date("2028-09-01"),
  total: 2000,
  remainingBudget: 1000,
};

it(`allocate a budget of 100`, () => {
  const result = allocateBudget(100, [mockBudget]);
  expect(result.budget?.remainingBudget).toBe(900);
});

it(`error when allocate a budget of 1500`, () => {
  const result = allocateBudget(1500, [mockBudget]);
  expect(result.success).toBe(false);
});
