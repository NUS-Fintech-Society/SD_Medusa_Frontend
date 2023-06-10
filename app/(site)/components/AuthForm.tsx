"use client";

import { useState, useCallback } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";

import AuthSocialButton from "./AuthSocialButton";
import Button from "@/app/components/inputs/Button";
import TextField from "../../components/inputs/TextField";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // Axios Register
    }

    if (variant === "LOGIN") {
      // NextAuth Register
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Provider Sign In
  };

  return (
    <div
      className="
                mt-8
                mx-4
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            "
    >
      <div
        className="
                bg-white
                px-4
                py-8
                shadow
                rounded-md
            "
      >
        <form
          className="
                    space-y-7
                "
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === "REGISTER" && (
            <TextField
              id="name"
              label="Name"
              register={register}
              errors={errors}
            />
          )}
          <TextField
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
            >
              {variant === "LOGIN" ? "Sign In" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                        absolute
                        inset-0
                        flex
                        items-center
                    "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div
              className="
                        relative
                        flex
                        justify-center
                        text-sm
                    "
            >
              <span
                className="
                        bg-white
                        px-2
                        text-gray-500
                    "
              >
                Or continue with
              </span>
            </div>
          </div>

          <div
            className="
                    mt-6
                    flex
                    gap-2
                "
          >
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>

          <div
            className="
                    flex
                    gap-2
                    justify-center
                    text-sm
                    mt-6
                    px-2
                    text-gray-500
                "
          >
            <div>
              {variant === "LOGIN"
                ? "New to Messenger?"
                : "Already have an account?"}
            </div>
            <div
              onClick={toggleVariant}
              className="underline cursor-pointer"
            >
              {variant === "LOGIN" ? "Create an account" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
