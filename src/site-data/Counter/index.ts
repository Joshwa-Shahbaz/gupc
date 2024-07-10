type CounterDataProps = {
  start: number;
  end: number;
  duration: number;
  text: string;
  suffix: string;
  prefix: string;
}[];

export const CounterData: CounterDataProps = [
  {
    start: 0,
    end: 100,
    duration: 5,
    text: "Customer satisfaction",
    suffix: "%",
    prefix: "",
  },
  {
    start: 0,
    end: 32,
    duration: 5,
    text: "Active users",
    suffix: "M",
    prefix: "",
  },
  {
    start: 0,
    end: 125,
    duration: 5,
    text: "Team members",
    suffix: "+",
    prefix: "",
  },
];
