import { useCallback } from "react";

const LoginPage = () => {
  const onFrameButtonClick = useCallback(() => {
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-[60%] bg-white flex flex-col justify-center items-stretch px-24">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold font-poppins text-center">LOGO</h2>
        </div>
        <div className="mb-8 ml-8">
          <h1 className="text-4xl text-gray-700 font-semibold font-poppins mb-2">Let's get your account setup</h1>
          <div className="text-sm text-gray-500 font-poppins">Email</div>
          <input
            className="w-10/12 h-9 mt-2 mb-4 px-4 rounded-lg border border-gray-300 outline-none "
            type="text"
            placeholder=""
          />
          <div className="text-sm text-gray-500 font-poppins">Create a Password</div>
          <input
            className="w-10/12 h-9 mt-2 mb-4 px-4 rounded-lg border border-gray-300 outline-none "
            type="password"
            placeholder=""
          />
          <div className="mb-4 flex justify-center w-9/12">
            <div className="g-recaptcha" data-sitekey="your-site-key"></div>
          </div>
          <button
            className="w-10/12 h-12 bg-[#242565] text-white rounded-lg hover:bg-darkslateblue"
            onClick={onFrameButtonClick}
          >
            Sign up
          </button>
          <div className="flex gap-24 mt-4 text-base">
            <div>
              <span>I agree to </span>
              <span className="text-blue-500">Rapogen's Terms of service</span>
            </div>
            <div>Already have an account?</div>
          </div>
        </div>
      </div>
      <div className="w-[40%] bg-[#242565]"></div>
    </div>
  );
};

export default LoginPage;