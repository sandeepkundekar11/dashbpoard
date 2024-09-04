import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [LoginData, setLoginData] = useState({
    userId: "",
    password: "",
  });
  const Navigate = useNavigate();
  const [LoginWarnings, setLoginWarnings] = useState({
    emailWarning: "",
    passwordWarning: "",
  });
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      Navigate("/dashboard");
    }
  }, []);

  const InputChange = (e) => {
    let { name, value } = e.target;
    setLoginData({
      ...LoginData,
      [name]: value,
    });
  };
  const OnFormSubmit = (e) => {
    e.preventDefault();

    let newWarning = {
      emailWarning: "",
      passwordWarning: "",
    };

    if (LoginData.userId !== "admin@utl.in") {
      newWarning.emailWarning = "Please Enter valid email";
    } else {
      newWarning.emailWarning = "";
    }

    if (LoginData.password !== "admin1234") {
      newWarning.passwordWarning = "please Enter valid  password";
    } else {
      newWarning.passwordWarning = "";
    }

    setLoginWarnings(newWarning);
    if (
      LoginData.userId === "admin@utl.in" &&
      LoginData.password === "admin1234"
    ) {
      localStorage.setItem("user", JSON.stringify({ LoginData }));
      Navigate("/dashboard");
    }
  };
  return (
    <div className="flex min-h-screen login-bg">
      {/* Left side - Login form */}
      <div className="w-2/4 flex items-center justify-center  p-12">
        <div className="loginSection rounded-sm shadow-lg border-gray-700 border bg-slate-800">
          <h1 className="text-4xl font-bold text-gray-300 mb-2">
            DWDM Network Management
          </h1>
          <p className="text-gray-200 mb-8">
            Please enter your credentials to access the management system.
          </p>

          <form onSubmit={OnFormSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-100 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={InputChange}
                name="userId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <p className="emailWarning text-red-500 text-sm font-semibold mt-1">
                {LoginWarnings.emailWarning}
              </p>
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-100 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={InputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        showPassword
                          ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      }
                    />
                  </svg>
                </button>
              </div>
              <p className="passowrdWaring text-red-500 text-sm font-semibold mt-1">
                {LoginWarnings.passwordWarning}
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right side  */}
    </div>
  );
}
