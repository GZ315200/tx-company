export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <>
        <div className="mb-10">
          <h1 className="text-4xl font-bold">账号密码登录</h1>
        </div>
        {/* Form */}
        <form>
          <div className="space-y-4">
            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                手机号
              </label>
              <input
                id="email"
                className="form-input w-full py-2"
                type="email"
                placeholder="corybarker@email.com"
                required
              />
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                密码
              </label>
              <input
                id="password"
                className="form-input w-full py-2"
                type="password"
                autoComplete="on"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
              登陆
            </button>
          </div>
        </form>
        {/* Bottom link */}
        <div className="mt-6 text-center">
          <Link
            className="text-sm text-gray-700 underline hover:no-underline"
            href="/reset-password"
          >
            忘记密码？
          </Link>
        </div>
      </>
    </>
  );
}
