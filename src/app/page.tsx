import LoginForm from "@/components/auth/login-form";

export default function Home() {


  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <LoginForm />
    </div>
  );
}
