import { BudgetType } from "@/types/budgets";
import { create } from "zustand";
import uuid from "react-native-uuid";
import { sortBudgetsByDate } from "@/utils/sortBudgetsByDate";

const mockBudgets = [
  {
    id: uuid.v4(),
    title: "Fall 2024",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-10-31"),
    total: 1200,
    remainingBudget: 740,
  },
  {
    id: uuid.v4(),
    title: "Development team",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-12-31"),
    total: 4500,
    remainingBudget: 1200,
  },
  {
    id: uuid.v4(),
    title: "2024",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    total: 10000,
    remainingBudget: 4600,
  },
];

export const useBudgetStore = create((set) => ({
  budgets: mockBudgets,
  purchases: [],
  addPurchase: (purchase: any) =>
    set((state: any) => {
      return { purchases: [...state.purchases, purchase] };
    }),
  allocateBudget: (budget: BudgetType) =>
    set((state: any) => {
      const newBudgets = state.budgets.filter((stateBudget: BudgetType) => stateBudget.id !== budget?.id);
      return { budgets: sortBudgetsByDate([...newBudgets, budget]) };
    }),
}));
