import { RadioGroup } from "@headlessui/react";
import { useForm } from "react-hook-form";

type Category = {
  id: number;
  name: string;
  checkedColor: string;
};

type Spend = {
  amount: number;
  category?: Category["name"];
};

const categories: Category[] = [
  { id: 1, name: "Basic", checkedColor: "bg-amber-600" },
  { id: 2, name: "Luxury", checkedColor: "bg-emerald-500" },
  { id: 3, name: "Savings", checkedColor: "bg-blue-600" },
];

export const SpendForm: React.FC = () => {
  const { handleSubmit, register } = useForm<Spend>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={void handleSubmit(onSubmit)}>
      <label
        htmlFor="amount"
        className="block text-sm font-medium text-gray-300"
      >
        Amount
      </label>
      <div className="relative my-3 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          {...register("amount", { required: true })}
          type="text"
          id="amount"
          className="block w-full rounded-md border-gray-300 px-7 py-4 focus:border-fuchsia-500 focus:ring-fuchsia-500"
          placeholder="0.00"
        />
      </div>

      <RadioGroup {...register("category")}>
        <RadioGroup.Label className={`text-sm font-medium text-gray-300`}>
          Category
        </RadioGroup.Label>
        {categories.map((plan) => (
          <RadioGroup.Option
            key={plan.id}
            value={plan.name}
            className={({ checked }) => `
              mt-2 rounded-md border border-white px-7 py-4 text-white focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800
              ${checked ? plan.checkedColor : ""}
            `}
          >
            {plan.name}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      <button className="mt-4 w-full rounded-md bg-fuchsia-500 px-4 py-2 text-white">
        Submit
      </button>
    </form>
  );
};
