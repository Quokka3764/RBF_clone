export default function App() {
  return (
    <>
      <div className="flex flex-col bg-[#212121] w-screen">
        <nav className="container-nav">
          <button className="rounded-3xl hover:bg-slate-600 absolute left-4 top-3 flex flex-col justify-center items-center w-11 h-11 pt-1">
            <span className="block w-5 h-0.5 bg-white rounded-sm mb-1 "></span>
            <span className="block w-5 h-0.5 bg-white rounded-sm mb-1 "></span>
            <span className="block w-5 h-0.5 bg-white rounded-sm mb-1 "></span>
          </button>
          <input
            type="text"
            placeholder="검색"
            className="absolute top-3 border w-96 h-10 border-gray-300 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-[60px]"
          />
        </nav>
        <div className="relative grid gap-y-2 auto-rows-min place-items-start px-3 py-3 h-dvh w-32">
          <a
            href="#"
            className="flex flex-col pt-4 gap-1 items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
          >
            <img src="src/assets/home.png" alt="홈버튼" className="h-5 w-5" />홈
          </a>
          <a
            href="#"
            className="flex flex-col pt-4 gap-1 items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
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
              alt="shorts"
              className="h-5 w-5"
            />
            구독
          </a>
          <a
            href="#"
            className="flex flex-col pt-4 gap-1 text-[11px] items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
          >
            <img
              src="src/assets/log/youtubeMusic.png"
              alt="shorts"
              className="h-7 w-7"
            />
            YouTube Music
          </a>
        </div>
      </div>
    </>
  );
}
