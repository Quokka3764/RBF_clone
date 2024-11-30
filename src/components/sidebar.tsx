export default function Sidebar() {
  return (
    <>
      <div className="relative grid gap-y-2 auto-rows-min place-items-start px-3 py-3 h-dvh w-32">
        <a
          href="#"
          className="flex flex-col pt-4 gap-1 text-[12px] items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
        >
          <img src="src/assets/home.png" alt="홈버튼" className="h-5 w-5" />홈
        </a>
        <a
          href="#"
          className="flex flex-col pt-4 gap-1 text-[12px] items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
        >
          <img
            src="src/assets/log/shorts.png"
            alt="shorts"
            className="h-5 w-5"
          />
          Shorts
        </a>
        <a
          href="#"
          className="flex flex-col pt-4 gap-1 text-[12px] items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
        >
          <img
            src="src/assets/log/subscribe.png"
            alt="구독"
            className="h-6 w-6"
          />
          구독
        </a>
        <a
          href="#"
          className="flex flex-col pt-4 gap-1 text-[12px] items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
        >
          <img
            src="src/assets/music.svg"
            alt="Youtube Music"
            className="h-6 w-6"
          />
          <span className="truncate text-center w-full">YouTube Music</span>
        </a>
        <a
          href="#"
          className="flex flex-col pt-4 gap-1 text-[12px] items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
        >
          <img src="src/assets/myPage.svg" alt="myPage" className="h-6 w-6" />내
          페이지
        </a>
        <a
          href="#"
          className="flex flex-col pt-4 gap-2 text-[12px] items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
        >
          <img src="src/assets/offline.svg" alt="myPage" className="h-6 w-6" />
          <span className="truncate text-center w-full">
            오프라인 저장 동영상
          </span>
        </a>
      </div>
    </>
  );
}
