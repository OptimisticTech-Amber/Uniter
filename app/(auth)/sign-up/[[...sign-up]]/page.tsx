import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center my-28 justify-center">
      <SignUp />
    </main>
  );
}