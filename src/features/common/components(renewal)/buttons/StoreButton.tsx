import google_active_md from "../../../../assets/v1.3/store/google-play-active-md.svg";
import google_inactive_md from "../../../../assets/v1.3/store/google-play-inactive-md.svg";
import google_active_sm from "../../../../assets/v1.3/store/google-play-active-sm.svg";
import google_inactive_sm from "../../../../assets/v1.3/store/google-play-inactive-sm.svg";

import apple_active_md from "../../../../assets/v1.3/store/apple-active-md.svg";
import apple_active_sm from "../../../../assets/v1.3/store/apple-active-sm.svg";
import apple_inactive_md from "../../../../assets/v1.3/store/apple-inactive-md.svg";
import apple_inactive_sm from "../../../../assets/v1.3/store/apple-inactive-sm.svg";

interface StoreButtonProps {
  size: "md" | "sm";
  type: "google" | "apple";
  status: "active" | "inactive";
}

export default function StoreButton({ size, type, status }: StoreButtonProps) {
  let imgSrc = "";

  if (type === "google") {
    if (status === "active") {
      imgSrc = size === "md" ? google_active_md : google_active_sm;
    } else {
      imgSrc = size === "md" ? google_inactive_md : google_inactive_sm;
    }
  } else if (type === "apple") {
    if (status === "active") {
      imgSrc = size === "md" ? apple_active_md : apple_active_sm;
    } else {
      imgSrc = size === "md" ? apple_inactive_md : apple_inactive_sm;
    }
  }

  return (
    <button
      type="button"
      // add background color
      className={`
        flex items-center justify-center
        rounded-lg
        ${size === "md" ? "gap-2" : "gap-1"}
        ${status === "inactive" ? "bg-[#444444]" : "bg-[#1ADCDF]"} 
    ${size === "md" ? "w-[120px] h-[36px]" : "w-[100px] h-[28px]"}
   
    `}
    >
      <img src={imgSrc} alt={`${type} store`} />

      <span
        className={`
        font-bold
        ${size === "md" ? "text-xs" : "text-[10px]"}
         ${status === "inactive" ? "text-[#999999]" : "text-[#000000]"}
        `}
      >
        {type === "google" ? "Google Play" : "App Store"}
      </span>
    </button>
  );
}
