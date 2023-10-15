import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
      flex
      min-h-full
      flex-col
      justify-center
      bg-slate-100
      "
    >
      <div className="container sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Fintech Society Logo"
          height="500"
          width="500"
          src="/images/black-fintech-logo-cropped.png"
          className="mx-auto w-auto"
        />
        <h2
          className="
            mt-6
            text-center
            text-h1-s
            font-bold
            tracking-tight
            text-gray-900
          "
        >
          Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  );
}
