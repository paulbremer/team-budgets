import * as React from "react";
import renderer from "react-test-renderer";

import BudgetItem from "../BudgetItem";

const mockBudget = {
  id: '1',
  title: "test budget",
  startDate: new Date(),
  endDate: new Date(),
  total: 2000,
  remainingBudget: 1000,
};

it(`renders correctly`, () => {
  const tree = renderer.create(<BudgetItem budget={mockBudget} />).toJSON();

  expect(tree).toMatchSnapshot();
});
