import { ThemedView } from "@/components/ThemedView";
import { Text, ScrollView, StyleSheet } from "react-native";
import { useBudgetStore } from "@/stores/budgets";
import { Stack } from "react-native-flex-layout";

export default function PurchasesScreen() {
  const purchases = useBudgetStore((state: any) => state.purchases);

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <Text style={styles.title}>Purchases</Text>

        {purchases.map((purchase: any, index: number) => (
          <Stack key={index} spacing={8} style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{purchase.item}</Text>
            <Text>&euro; {purchase.number}</Text>
            <Text>Budget {purchase.budget}</Text>
          </Stack>
        ))}

        {purchases.length === 0 && <Text>No purchases yet.</Text>}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginTop: 64,
    marginBottom: 12,
  },
  itemContainer: {
    backgroundColor: "#fff",
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
  itemTitle: {
    fontWeight: "bold",
  },
});
