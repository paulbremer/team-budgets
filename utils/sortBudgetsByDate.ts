import { BudgetType } from "@/types/budgets";

// Sort budgets by closest expiration date
export function sortBudgetsByDate(budgets: BudgetType[]) {
  const sortedBudgets = budgets.sort((a, b) => {
    const endDateDiff = new Date(a.endDate).getTime() - new Date(b.endDate).getTime();

    if (endDateDiff === 0) {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    }

    return endDateDiff;
  });

  return sortedBudgets;
}
