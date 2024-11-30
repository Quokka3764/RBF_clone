export default function Navigation() {
  return (
    <>
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
            <img src="./src/assets/search.svg" alt="검색" className="w-5 h-5" />
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
    </>
  );
}
