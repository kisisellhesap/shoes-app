import { type FC, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth";
import type { UserRegister } from "../../utils/types";

const Register: FC = () => {
  const { register } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    register.mutate(values as unknown as UserRegister);
    console.log(values);
  };
  return (
    <div className=" h-screen">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="./logo.svg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Kaydol
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input label="Name" name="firstName" />
            <Input label="Surname" name="lastName" />
            <Input label="Email" name="email" type="email" />
            <Input label="Password" name="password" type="password" />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kayıt Ol
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            If u a member?
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500 ml-1"
            >
              Giriş Yap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
