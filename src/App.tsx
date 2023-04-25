import React, { useEffect } from "react";
import "./App.scss";
import { useGeetestCaptcha } from "./hooks/useGeetestCaptcha";

const App = () => {
  const { renderGeetestCaptcha, isCaptchaVerified, showCaptcha } =
    useGeetestCaptcha();

  useEffect(() => {
    if (isCaptchaVerified) {
      console.log("Captcha is verified");
    }
  }, [isCaptchaVerified]);

  return (
    <div className="demoform">
      <form id="form">
        {renderGeetestCaptcha()}
        <div className="login" onClick={showCaptcha}>
          Show Captcha
        </div>
      </form>
    </div>
  );
};

export default App;
