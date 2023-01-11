import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { Tab } from '@headlessui/react'

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col justify-between bg-gradient-to-b from-black to-gray-900">



<Tab.Group defaultIndex={1}>
  <Tab.Panels>
    <Tab.Panel>
      Tab 1 content

    </Tab.Panel>
    <Tab.Panel>
      <div className="container flex flex-col items-center px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Income <span className="text-[hsl(280,100%,70%)]">Dist</span>
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          {hello.data?.greeting ?? "Loading..."}
        </p>
      </div>
    </Tab.Panel>
    <Tab.Panel>
      Tab 3 content
    </Tab.Panel>
  </Tab.Panels>
  <Tab.List className="flex bg-gray-800">
    <Tab className={({ selected }) => `
      ${selected ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white'}
      w-full py-4 text-sm font-medium text-center 
    `}>
      History
    </Tab><Tab className={({ selected }) => `
      ${selected ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white'}
      w-full 4 text-sm font-medium text-center 
    `}>
      Home
    </Tab><Tab className={({ selected }) => `
      ${selected ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white'}
      w-full 4 text-sm font-medium text-center 
    `}>
      Settings
    </Tab>
  </Tab.List>

</Tab.Group>


      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
