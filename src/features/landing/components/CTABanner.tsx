export default function CTABanner() {
  return (
    <section
      id="download"
      className="py-[80px] md:py-[120px] text-center bg-black"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(26,220,223,0.12) 0%, transparent 70%), #000000',
      }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1280px] mx-auto px-16 max-[600px]:px-6">
        <h2
          id="cta-heading"
          className="text-[clamp(2.5rem,6vw,5.25rem)] font-light text-white leading-[1.1] tracking-[-0.02em] mb-5 animate-fade-in"
        >
          지금 다운로드하고<br />
          {/* A11y: accent span is inline styling only — heading text is complete */}
          <span className="font-extrabold text-miti-brand">오늘 경기</span>를 찾아보세요
        </h2>

        <p className="text-[15px] md:text-[17px] text-[#ebebeb] max-w-[520px] mx-auto mb-12 leading-[1.6]">
          경기 예약부터 팀 매칭까지, MITI 앱 하나로 모든 것을 해결하세요.
          지금 바로 가까운 코트에서 게임을 시작하세요.
        </p>

        {/* A11y: <nav> landmark with label — these are external navigation links (WCAG 2.4.1) */}
        <nav
          className="flex gap-4 justify-center flex-wrap"
          aria-label="앱 다운로드"
        >
          {/*
            A11y: visible text "Google Play" / "App Store" is the accessible name (WCAG 2.5.3).
            No aria-label override — it would conflict with visible label.
            sr-only span appended so AT reads new-tab notice without overriding the label (WCAG 2.4.4).
          */}
          <a
            href="https://play.google.com/store/apps/details?id=com.miti.miti&hl=ko"
            className={[
              'inline-flex items-center gap-[12px] w-[190px] h-[52px] rounded-xl pl-[26px]',
              'bg-white text-black no-underline text-[13px]',
              'transition-all duration-200 ease-out',
              'hover:bg-miti-brand hover:scale-105 active:scale-95',
            ].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5.8125 2.25085C5.75684 2.24499 5.70703 2.27135 5.64844 2.27428C5.59863 2.27721 5.55762 2.26549 5.50781 2.27428C5.49902 2.27428 5.49316 2.27428 5.48438 2.27428C5.46094 2.27428 5.4375 2.27428 5.41406 2.27428C5.33203 2.29186 5.25293 2.32409 5.17969 2.36803C5.10059 2.40905 5.02734 2.46471 4.96875 2.5321C4.67578 2.77819 4.5 3.15905 4.5 3.51647V20.6024C4.5 20.9716 4.66406 21.4169 5.0625 21.6337C5.0918 21.6483 5.12695 21.6454 5.15625 21.6571C5.17969 21.6659 5.20312 21.6747 5.22656 21.6805C5.58398 21.8007 5.95605 21.7303 6.23438 21.5633C6.24316 21.5633 6.24902 21.5633 6.25781 21.5633C6.58008 21.3671 13.3125 17.2508 13.3125 17.2508L16.8984 15.0946C16.8984 15.0946 9.93994 20.25 20.3438 13.0087C20.6865 12.8007 21.0059 12.4051 21 11.9305C20.9941 11.4559 20.666 11.1044 20.3438 10.9227C20.2412 10.8641 19.3389 10.3221 18.5156 9.82116C17.7275 9.34069 17.0361 8.92468 16.9688 8.88366C16.9453 8.86608 16.9219 8.85143 16.8984 8.83678L13.3125 6.6571C13.3125 6.6571 6.78809 2.69909 6.39844 2.46178C6.22559 2.35924 6.02051 2.27428 5.8125 2.25085ZM6 4.57116L13.0781 11.954L6 19.3368V4.57116ZM9.60938 6.16491C10.9336 6.96764 12.5391 7.94616 12.5391 7.94616L15.3047 9.63366L14.1094 10.8758L9.60938 6.16491ZM16.6172 10.4305C16.9043 10.6063 17.168 10.7616 17.7422 11.1102C18.3691 11.4911 18.8057 11.7342 19.1719 11.954C18.4834 12.37 17.1768 13.1757 16.6406 13.5008L15.1641 11.954L16.6172 10.4305ZM14.1094 13.0555L15.3047 14.2977L12.5391 15.9852C12.5391 15.9852 10.8955 16.9725 9.58594 17.7665L14.1094 13.0555Z"
                fill="currentColor"
              />
            </svg>
            <span className="flex flex-col items-start leading-[1.2]">
              <small className="text-[9px] opacity-60 tracking-[0.08em] uppercase">GET IT ON</small>
              <strong className="text-[14px] font-semibold">Google Play</strong>
            </span>
            {/* A11y: sr-only new-tab notice (WCAG 2.4.4) */}
            <span className="sr-only">(새 탭에서 열림)</span>
          </a>

          <a
            href="https://apps.apple.com/kr/app/miti-%EB%AF%B8%ED%8B%B0/id6503062372"
            className={[
              'inline-flex items-center gap-[12px] w-[190px] h-[52px] rounded-xl pl-[26px]',
              'bg-white text-black no-underline text-[13px]',
              'transition-all duration-200 ease-out',
              'hover:bg-miti-brand hover:scale-105 active:scale-95',
            ].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 2.25C6.62402 2.25 2.25 6.62402 2.25 12C2.25 17.376 6.62402 21.75 12 21.75C17.376 21.75 21.75 17.376 21.75 12C21.75 6.62402 17.376 2.25 12 2.25ZM12 3.75C16.5645 3.75 20.25 7.43555 20.25 12C20.25 16.5645 16.5645 20.25 12 20.25C7.43555 20.25 3.75 16.5645 3.75 12C3.75 7.43555 7.43555 3.75 12 3.75ZM11.9766 6.1875C11.918 6.19629 11.8447 6.22559 11.7891 6.25781L11.4141 6.46875C11.1943 6.59766 11.1211 6.87891 11.25 7.10156L14.4609 12.6094L15.6328 11.9297L12.4219 6.42188C12.3252 6.25781 12.1553 6.16406 11.9766 6.1875ZM10.9922 8.01562C10.8135 7.99219 10.6201 8.08301 10.5234 8.25L10.125 8.95312L11.3438 9.65625L11.7422 8.95312C11.8711 8.73047 11.7979 8.44922 11.5781 8.32031L11.1562 8.08594C11.1006 8.05371 11.0508 8.02441 10.9922 8.01562ZM10.0312 9.11719L7.19531 13.9688L8.39062 14.6719L11.2266 9.82031L10.0312 9.11719ZM6 11.3203V12.6797H7.71094L8.50781 11.3203H6ZM10.5469 11.3203L9.79688 12.6797H14.1797L13.4297 11.3203H10.5469ZM15.5625 11.3203L16.2891 12.6797H17.9766V11.3203H15.5625ZM15.7734 12.1641L14.6016 12.8438L15.2812 14.0156L16.4531 13.3359L15.7734 12.1641ZM16.3828 13.6406C16.3447 13.6465 16.3066 13.6641 16.2656 13.6875C16.0752 13.7959 15.7998 13.9629 15.6328 14.0625C15.3193 14.25 15.5625 14.8096 15.6328 14.9297C16.04 15.6123 16.4648 15.5244 16.7812 16.0078C16.9541 16.2715 16.8896 16.3887 16.9453 16.4766C16.9658 16.5088 17.0361 16.5381 17.0625 16.5C17.5518 15.8232 17.417 14.6484 17.0625 14.1328C16.9189 13.9219 16.6582 13.5938 16.3828 13.6406ZM7.03125 14.2266L6.44531 16.4297C6.43359 16.4707 6.45703 16.5264 6.49219 16.5469C6.52734 16.5674 6.58008 16.5527 6.60938 16.5234L8.25 14.9297L7.03125 14.2266Z"
                fill="currentColor"
              />
            </svg>
            <span className="flex flex-col items-start leading-[1.2]">
              <small className="text-[9px] opacity-60 tracking-[0.08em] uppercase">DOWNLOAD ON THE</small>
              <strong className="text-[14px] font-semibold">App Store</strong>
            </span>
            <span className="sr-only">(새 탭에서 열림)</span>
          </a>
        </nav>
      </div>
    </section>
  );
}
