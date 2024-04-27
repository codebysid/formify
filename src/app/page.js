import HeroSlide from "@/components/HeroSlide";
import Logo from "@/components/Logo";
import SigninButton from "@/components/SigninButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-between h-1/2 gap-20">
        <Logo />
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-3xl text-center font-bold w-[100%] md:text-6xl lg:w-2/3">Create Forms and Collet Data For Free</h1>
          <SigninButton />
        </div>
        <HeroSlide />
      </div>
    </main>
  );
}
