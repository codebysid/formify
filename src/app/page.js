import Logo from "@/components/Logo";
import SigninButton from "@/components/SigninButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-start justify-center gap-20 h-[60vh]">
        <Logo />
        <div className="flex flex-col gap-5 items-start">
          <h1 className="text-4xl font-bold md:text-6xl">Create and Share Forms For Free</h1>
          <SigninButton />
        </div>
      </div>
    </main>
  );
}
