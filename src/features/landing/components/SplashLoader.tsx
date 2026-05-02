import Lottie from "lottie-react";
import splashAnimation from "@/assets/splash.json";

const SplashLoader = () => {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <Lottie
        animationData={splashAnimation}
        loop
        aria-label="로딩 중"
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default SplashLoader;
