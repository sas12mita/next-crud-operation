import LoginForm from "../_component/LoginForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      <LoginForm />
       <p className="text-center text-sm mt-2">
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>

    </div>
  );
}
