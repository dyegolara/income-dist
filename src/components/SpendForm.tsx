import { RadioGroup } from "@headlessui/react";
const plans = [
  { id: 1, name: "Startup" },
  { id: 2, name: "Business" },
  { id: 3, name: "Enterprise" },
];
export const SpendForm: React.FC = () => {
  return (
    <form method="POST" action="/spend">
      <label
        htmlFor="amount"
        className="block text-sm font-medium text-gray-300"
      >
        Amount
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="amount"
          id="amount"
          className="block w-full rounded-md border-gray-300 px-7 py-4 focus:border-[hsl(280,100%,70%)] focus:ring-[hsl(280,100%,70%)]"
          placeholder="0.00"
        />
      </div>

      <RadioGroup name="category">
        <RadioGroup.Label className={`mt-4 text-sm font-medium text-gray-300`}>
          Category
        </RadioGroup.Label>
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.id}
            value={plan}
            className={({ checked }) => `
              relative mt-2 rounded-md rounded-md border-gray-200 px-7 py-4 text-gray-300 focus:border-[hsl(280,100%,70%)] focus:outline-none
              focus:ring-2 focus:ring-[hsl(280,100%,70%)] focus:ring-[hsl(280,100%,70%)] focus:ring-offset-2
              ${checked ? "bg-[hsl(280,100%,70%)] text-white" : ""}
            `}
          >
            {plan.name}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      <button className="mt-4 w-full rounded-md bg-[hsl(280,100%,70%)] px-4 py-2 text-white">
        Submit
      </button>
    </form>
  );
};
