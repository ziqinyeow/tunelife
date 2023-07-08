import { Card, Title, BarChart, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan 22",
    Failed: 2890,
    Completed: 1400,
    "In Progress": 4938,
  },
  {
    Month: "Feb 22",
    Failed: 1890,
    Completed: 998,
    "In Progress": 2938,
  },
  {
    Month: "Mar 22",
    Failed: 2100,
    Completed: 2300,
    "In Progress": 2999,
  },
  {
    Month: "Apr 22",
    Failed: 1890,
    Completed: 998,
    "In Progress": 2938,
  },
  {
    Month: "May 22",
    Failed: 3890,
    Completed: 2980,
    "In Progress": 2645,
  },
  {
    Month: "Jun 22",
    Failed: 1890,
    Completed: 998,
    "In Progress": 2938,
  },
  {
    Month: "July 22",
    Failed: 2100,
    Completed: 2300,
    "In Progress": 2999,
  },
  {
    Month: "Aug 22",
    Failed: 1890,
    Completed: 998,
    "In Progress": 2938,
  },
  {
    Month: "Sep 22",
    Failed: 3890,
    Completed: 2980,
    "In Progress": 2645,
  },
  {
    Month: "Oct 22",
    Failed: 2100,
    Completed: 2300,
    "In Progress": 2999,
  },
  {
    Month: "Nov 22",
    Failed: 1890,
    Completed: 998,
    "In Progress": 2938,
  },
  {
    Month: "Dec 22",
    Failed: 3890,
    Completed: 2980,
    "In Progress": 2645,
  },
];

const valueFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

export default function Stacked() {
  return (
    <Card className="w-full">
      <Title>Employee Engagement</Title>
      <Text>by Status</Text>
      <BarChart
        className="mt-4 h-80"
        data={data}
        index="Month"
        categories={["Completed", "In Progress", "Failed"]}
        colors={["red", "yellow", "green"]}
        stack={true}
        relative={true}
      />
    </Card>
  );
}
