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
          <a href="#">
            <img
              src="src/assets/log/Youtube_logo.png"
              alt="로고"
              className="w-25 h-6 absolute left-24 top-5"
            />
          </a>
          <div className="relative w-[35%]">
            <input
              type="text"
              placeholder="검색"
              className="w-full h-10 border bg-[#272727] border-gray-700 rounded-3xl p-2 pr-12 text-white"
            />
            <button
              type="button"
              className="flex justify-center items-center absolute top-0 right-[1px] h-full w-16 bg-[#272727] rounded-r-2xl border border-gray-700"
            >
              <img
                src="./src/assets/search.svg"
                alt="검색"
                className="w-5 h-5"
              />
            </button>
          </div>
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
              alt="구독"
              className="h-6 w-6"
            />
            구독
          </a>
          <a
            href="#"
            className="flex flex-col pt-4 gap-1 text-[11px] items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
          >
            <img
              src="src/assets/music.svg"
              alt="Youtube Music"
              className="h-6 w-6"
            />
            YouTube Music
          </a>
        </div>
      </div>
    </>
  );
}
