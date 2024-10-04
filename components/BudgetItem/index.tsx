import { Text, StyleSheet, View } from "react-native";
import React from "react";
import ProgressBar from "react-native-progress/Bar";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack, HStack } from "react-native-flex-layout";

import { BudgetType } from "@/types/budgets";

type BudgetItemProps = {
  budget: BudgetType;
};

export default function BudgetItem({ budget }: BudgetItemProps) {
  if (!budget) return;

  const tintColor = useThemeColor({}, "tint");
  const { title, remainingBudget, total, startDate, endDate } = budget;

  return (
    <View style={styles.container}>
      <Stack spacing={8}>
        <Text style={styles.title}>💰 {title}</Text>
        <HStack justify="between">
          <Text>Remaining budget</Text>
          <Text>
            &euro; {remainingBudget} / &euro; {total}
          </Text>
        </HStack>
        <ProgressBar progress={remainingBudget / total} width={null} height={10} color={tintColor} borderRadius={4} />
        <HStack justify="between" mt={8}>
          <Text>Period</Text>
          <Text>
            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </Text>
        </HStack>
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 8,
    padding: 20,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold"
  },
});
