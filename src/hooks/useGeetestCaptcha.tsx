import { useEffect, useState } from "react";

const config: any = {
  captchaId: "647f5ed2ed8acb4be36784e01556bb71",
  language: "tr",
  product: "bind",
  protocol: "https://",
};

export const useGeetestCaptcha = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  useEffect(() => {
    (window as any).initGeetest4(config, handler);
  }, []);

  const handler = (captchaObj: any) => {
    (window as any).captchaObj = captchaObj;
    captchaObj
      .appendTo("#captcha")
      .onReady(function () {
        console.log("ready");
      })
      .onNextReady(function () {})
      .onBoxShow(function () {
        console.log("boxShow");
      })
      .onError(function (e: any) {
        console.log(e);
      })
      .onSuccess(() => {
        console.log("success");
        setIsCaptchaVerified(true);
      });
  };

  const showCaptcha = () => {
    if ((window as any).captchaObj) {
      (window as any).captchaObj.showCaptcha();
    }
  };

  const renderGeetestCaptcha = () => <div className="captcha" />;

  return { isCaptchaVerified, showCaptcha, renderGeetestCaptcha };
};
