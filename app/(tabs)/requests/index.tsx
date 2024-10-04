import { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { Text, TextInput, ScrollView, View, StyleSheet } from "react-native";
import { useBudgetStore } from "@/stores/budgets";
import Button from "@/components/Button";
import { useThemeColor } from "@/hooks/useThemeColor";
import { allocateBudget } from "@/utils/allocateBudget";
import Toast from "react-native-toast-message";
import { Stack } from "react-native-flex-layout";

export default function RequestsScreen() {
  const budgets = useBudgetStore((state: any) => state.budgets);
  const allocateStoreBudget = useBudgetStore((state: any) => state.allocateBudget);
  const addStorePurchase = useBudgetStore((state: any) => state.addPurchase);
  const [number, onChangeNumber] = useState("");
  const [item, onChangeItem] = useState("");

  const backgroundColor = useThemeColor({}, "background");

  const handleAllocateBudget = () => {
    if (!item || !number) {
      Toast.show({
        type: "info",
        text1: "⚠️ Please add item and amount",
      });
      return;
    }

    try {
      const result = allocateBudget(+number, budgets);

      if (result.success) {
        allocateStoreBudget(result.budget);
        addStorePurchase({ item, number, budget: result.budget?.title });
        Toast.show({
          type: "success",
          text1: "Budget allocated",
          text2: `💸 ${result?.budget?.title} budget can cover it`,
        });
        return;
      }
      throw new Error(result.message);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: error.message,
      });
    }
  };

  return (
    <ScrollView style={{ backgroundColor: backgroundColor }}>
      <ThemedView style={{ marginHorizontal: 24 }}>
        <Text style={styles.title}>Requests</Text>

        <Stack spacing={16} mt={16}>
          <View>
            <Text style={styles.text}>Item</Text>
            <TextInput
              onChangeText={onChangeItem}
              value={item}
              placeholder="Conference ticket"
              style={styles.textInput}
            />
          </View>
          <View>
            <Text style={styles.text}>Amount</Text>
            <TextInput
              onChangeText={onChangeNumber}
              value={number}
              inputMode="decimal"
              placeholder="100"
              style={{ borderWidth: 1, backgroundColor: "#fff", borderColor: "#aaa", padding: 12, borderRadius: 12 }}
            />
          </View>

          <Button title="Request budget" onPress={handleAllocateBudget} />
        </Stack>
      </ThemedView>
      <Toast topOffset={72} />
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
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#aaa",
    padding: 12,
    borderRadius: 12,
  },
});
