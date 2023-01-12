import AuthShowcase from "./AuthShowcase";

export const Login = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">You are not logged in</p>
      <AuthShowcase />
    </div>
  );
};
