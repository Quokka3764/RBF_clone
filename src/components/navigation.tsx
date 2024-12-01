import { useState } from "react";
import Modal from "./modal";

export default function Navigation() {
  const [isModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((isModal) => !isModal);
  };

  return (
    <>
      <nav className="relative flex justify-center items-center h-20 w-screen">
        <button
          onClick={toggleModal}
          className="rounded-3xl hover:bg-[#3f3f3f] fixed left-4 top-3 flex flex-col justify-center items-center w-11 h-11 pt-1 z-50"
        >
          <span className="block w-5 h-0.5 bg-white rounded-sm mb-1 "></span>
          <span className="block w-5 h-0.5 bg-white rounded-sm mb-1 "></span>
          <span className="block w-5 h-0.5 bg-white rounded-sm mb-1 "></span>
        </button>
        <a href="#">
          <img
            src="src/assets/log/Youtube_logo.png"
            alt="로고"
            className="w-26 h-6 absolute left-20 top-5"
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
          className="flex justify-center items-center relative left-5 w-10 h-10 rounded-full bg-[#272727] hover:bg-[#3f3f3f]"
        >
          <img src="./src/assets/mic.svg" alt="마이크" className="w-5 h-5" />
        </a>
        <div className="flex justify-end items-center absolute right-8 ">
          <a
            href="#"
            className="w-11 h-11 rounded-full hover:bg-[#3f3f3f] flex justify-center items-center"
          >
            <img
              src="./src/assets/videoCall.svg"
              alt="videoCall"
              className="w-7 h-7"
            />
          </a>
          <a
            href="#"
            className="w-11 h-11 rounded-full hover:bg-[#3f3f3f] flex justify-center items-center"
          >
            <img
              src="./src/assets/notification.svg"
              alt="notification"
              className="w-7 h-7 "
            />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full flex justify-center items-center"
          >
            <img src="./src/assets/User.svg" alt="User" className="w-9 h-9" />
          </a>
        </div>
        <div className="flex absolute top-20 left-32 gap-3 z-10 text-[#f1f1f1] text-1g">
          <button className="px-4 h-8 bg-[#272727] hover:bg-[#3f3f3f] rounded-lg">
            <span className="truncate">전체</span>
          </button>
          <button className="px-4 h-8 bg-[#272727] hover:bg-[#3f3f3f] rounded-lg">
            <span className="truncate">축구</span>
          </button>
          <button className="px-4 h-8 bg-[#272727] hover:bg-[#3f3f3f] rounded-lg">
            <span className="truncate">음악</span>
          </button>
          <button className="px-4 h-8 bg-[#272727] hover:bg-[#3f3f3f] rounded-lg">
            <span className="truncate">뉴스</span>
          </button>
          <button className="px-4 h-8 bg-[#272727] hover:bg-[#3f3f3f] rounded-lg">
            <span className="truncate">라이브</span>
          </button>
          <button className="px-4 h-8 bg-[#272727] hover:bg-[#3f3f3f] rounded-lg">
            <span className="truncate">최근에 업로드된 동영상</span>
          </button>
          <button className="px-4 h-8 bg-[#272727] hover:bg-[#3f3f3f] rounded-lg">
            <span className="truncate">감상한 동영상</span>
          </button>
        </div>
        <Modal isModal={isModal} toggleModal={toggleModal} />
      </nav>
    </>
  );
}
