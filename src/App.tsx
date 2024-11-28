export default function App() {
  return (
    <>
      <div className="flex flex-col bg-[#0f0f0f] w-screen">
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
          <div className="relative w-[30%]">
            <input
              type="text"
              placeholder="검색"
              className="w-full h-10 border bg-[#121212] border-gray-700 rounded-3xl p-3 text-white"
            />
            <a href="#">
              <img
                src="./src/assets/Keyboard.svg"
                alt="키보드"
                className="absolute top-2 right-20"
              />
            </a>
            <button
              type="button"
              className="flex justify-center items-center absolute top-0 right-[1px] h-10 w-16 bg-[#272727] rounded-r-2xl border border-gray-700"
            >
              <img
                src="./src/assets/search.svg"
                alt="검색"
                className="w-5 h-5"
              />
            </button>
          </div>
          <a
            href="#"
            className="flex justify-center items-center relative left-5 w-10 h-10 rounded-full bg-[#272727]"
          >
            <img src="./src/assets/mic.svg" alt="마이크" className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center absolute right-[50px] w-12 h-12 rounded-full"
          >
            <img src="./src/assets/User.svg" alt="User" className="w-10 h-10" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center absolute right-[100px] w-12 h-12 rounded-full hover:bg-gray-800 "
          >
            <img
              src="./src/assets/notification.svg"
              alt="notification"
              className="w-7 h-7"
            />
          </a>
          <a
            href="#"
            className="flex justify-center items-center absolute right-[150px] w-12 h-12 rounded-full hover:bg-gray-800"
          >
            <img
              src="./src/assets/videoCall.svg"
              alt="videoCall"
              className="w-7 h-7"
            />
          </a>
        </nav>
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
            <img src="src/assets/myPage.svg" alt="myPage" className="h-6 w-6" />
            내 페이지
          </a>
          <a
            href="#"
            className="flex flex-col pt-4 gap-2 text-[12px] items-center text-white rounded-xl h-20 w-20 transition-opacity duration-200 hover:bg-slate-700"
          >
            <img
              src="src/assets/offline.svg"
              alt="myPage"
              className="h-6 w-6"
            />
            <span className="truncate text-center w-full">
              오프라인 저장 동영상
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
