import React, { useMemo } from "react";
import { APPLE_STORE, PLAYSTORE } from "../../../utils/app.ts";

const AppDownloadBtn: React.FC = () => {
  const platform =
    typeof navigator !== "undefined"
      ? (navigator as any).userAgentData?.platform ||
        navigator.platform ||
        navigator.userAgent
      : "";

  const isApple = useMemo(
    () => /Mac|iPhone|iPad|iPod/i.test(String(platform)),
    [platform]
  );
  //   const isAndroid = useMemo(
  //     () => /Android/i.test(String(platform)),
  //     [platform]
  //   );

  const externalStore = isApple ? APPLE_STORE : PLAYSTORE;

  return (
    <div className="flex items-center gap-2">
      <a
        href={externalStore}
        target="_blank"
        rel="noopener noreferrer"
        //
        className="py-2 px-3 bg-[#1ADCDF] rounded-full text-xs font-bold text-[#262626]"
      >
        앱 다운로드
      </a>
    </div>
  );
};

export default AppDownloadBtn;
