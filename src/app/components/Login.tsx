"use client";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { FormEvent, useState } from "react";
import InputField from "@/components/InputField";
import LoginButton from "@/components/LoginButton";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="w-[392px]">
        <h2 className="text-2xl font-extrabold text-center text-gray-800">
          로그인
        </h2>
        <form onSubmit={handleSubmit}>
          <InputField
            id="email"
            label="이메일"
            placeholder="이메일을 입력하세요"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            id="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-10 text-center">
            <LoginButton type="submit">로그인</LoginButton>
            <LoginButton
              type="button"
              onClick={() => signInWithGoogle()}
              styleType="secondary"
            >
              Google 계정으로 로그인
            </LoginButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
