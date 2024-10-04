import { BudgetType } from "@/types/budgets";
import { sortBudgetsByDate } from './sortBudgetsByDate';

export function allocateBudget(purchaseAmount: number, budgets: BudgetType[]) {
  const currentDate = new Date();

  // Filter out expired budgets
  const validBudgets = budgets.filter((budget) => {
    const startDate = new Date(budget.startDate);
    const endDate = new Date(budget.endDate);
    return currentDate >= startDate && currentDate <= endDate && budget.remainingBudget >= purchaseAmount;
  });

  // If no valid budgets, return an error
  if (validBudgets.length === 0) {
    return { success: false, message: "❌ No budget can cover this purchase" };
  }

  // Sort budgets by closest expiration date
  sortBudgetsByDate(validBudgets);

  // Apply the transaction to the optimal budget (closest to expiration)
  const selectedBudget = validBudgets[0];
  selectedBudget.remainingBudget -= purchaseAmount;

  return { success: true, budget: selectedBudget };
}
