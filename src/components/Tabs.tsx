import { Tab } from "@headlessui/react";

export const Tabs = ({ tabs = [] }: { tabs: string[] }) => (
  <Tab.List className="flex w-full bg-gray-800">
    {tabs.map((tab) => (
      <Tab
        key={tab}
        className={({ selected }) => `
      ${selected ? "bg-gray-900 text-white" : "text-gray-300 hover:text-white"}
      w-full p-4 text-center text-sm font-medium 
    `}
      >
        {tab}
      </Tab>
    ))}
  </Tab.List>
);
