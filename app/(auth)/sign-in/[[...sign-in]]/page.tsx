import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
    <main className="flex h-screen w-full items-center my-28 justify-center">
      <SignIn/>
    </main>
  );
}