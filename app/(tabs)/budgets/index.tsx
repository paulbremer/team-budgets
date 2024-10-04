import BudgetItem from "@/components/BudgetItem";
import { ThemedView } from "@/components/ThemedView";
import { Text, ScrollView, StyleSheet } from "react-native";
import { useBudgetStore } from "@/stores/budgets";
import { BudgetType } from "@/types/budgets";

export default function BudgetsScreen() {
  const budgets = useBudgetStore((state: any) => state.budgets);

  return (
    <ScrollView>
      <ThemedView style={{ flex: 1, marginHorizontal: 24 }}>
        <Text style={styles.title}>Budgets</Text>

        {budgets.map((budgetItem: BudgetType) => (
          <BudgetItem key={budgetItem.id} budget={budgetItem} />
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginTop: 64,
    marginBottom: 12,
  },
});
