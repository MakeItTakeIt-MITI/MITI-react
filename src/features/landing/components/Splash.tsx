import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface SplashProps {
  onComplete: () => void;
}

export const Splash: React.FC<SplashProps> = ({ onComplete }) => {
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // 스플래시 화면이 켜졌을 때 바디 스크롤을 방지합니다.
    document.body.style.overflow = "hidden";
    
    // public/splash.json 파일을 fetch로 안전하게 가져옵니다.
    fetch("/splash.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load splash animation");
        return res.json();
      })
      .then((data) => {
        setAnimationData(data);
      })
      .catch((err) => {
        console.error(err);
        // 로드에 실패하면 즉시 스플래시를 종료합니다.
        onComplete();
      });

    // 안전장치: 애니메이션 완료 이벤트가 작동하지 않을 경우를 대비해 3.5초 후 강제 종료합니다.
    const fallbackTimeout = setTimeout(() => {
      handleComplete();
    }, 3500);

    return () => {
      // 컴포넌트가 언마운트될 때 스크롤 방지를 해제합니다.
      document.body.style.overflow = "";
      clearTimeout(fallbackTimeout);
    };
  }, []);

  const handleComplete = () => {
    setIsFadeOut(true);
    // 페이드아웃 애니메이션(300ms)이 끝난 후 완료 처리합니다.
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  if (!animationData) {
    // JSON 데이터 로딩 중에는 검은 화면만 렌더링합니다.
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
          zIndex: 999999,
        }}
      />
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999,
        opacity: isFadeOut ? 0 : 1,
        transition: "opacity 0.3s ease-in-out",
        pointerEvents: isFadeOut ? "none" : "auto",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Lottie
          animationData={animationData}
          loop={false}
          onComplete={handleComplete}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Splash;
