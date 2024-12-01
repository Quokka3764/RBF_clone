interface ModalProps {
  isModal: boolean;
  toggleModal: () => void;
}

export default function Modal({ isModal, toggleModal }: ModalProps) {
  return (
    <>
      {/* 모달 배경 */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ${
          isModal ? "block" : "hidden"
        } z-40`}
        // 배경 클릭 시 모달 닫기
        onClick={toggleModal}
      ></div>

      {/* 모달 본체 */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#0f0f0f]  transition-transform duration-300 ${
          isModal ? "translate-x-0" : "-translate-x-full"
        } z-50 w-[250px]`}
      >
        <div className="p-4">
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
              className="w-24 h-5 absolute left-20 top-6"
            />
          </a>
          <div className="flex flex-col gap-y-1 relative top-16">
            <a
              href="#"
              className="flex gap-7 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
            >
              <img src="src/assets/home.png" alt="홈버튼" className="h-5 w-5" />
              홈
            </a>
            <a
              href="#"
              className="flex gap-7 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
            >
              <img
                src="src/assets/log/shorts.png"
                alt="Shorts"
                className="h-5 w-5"
              />
              Shorts
            </a>
            <a
              href="#"
              className="flex gap-6 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
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
              className="flex gap-6 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
            >
              <img
                src="src/assets/music.svg"
                alt="Youtube Music"
                className="h-6 w-6"
              />
              <span className="truncate w-full">YouTube Music</span>
            </a>
            <hr className="border-b-1 border-[#3f3f3f] relative top-2" />
          </div>
          <div className="flex flex-col gap-y-1 relative top-20">
            <a
              href="#"
              className="flex gap-2 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
            >
              <span>내 페이지</span>
              <img
                src="src/assets/arrow_forward.svg"
                alt="화살표"
                className="w-4 h-4"
              />
            </a>
            <a
              href="#"
              className="flex gap-5 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
            >
              <img
                src="src/assets/history.svg"
                alt="시청 기록"
                className="h-7 w-7"
              />
              <span>시청 기록</span>
            </a>
            <a
              href="#"
              className="flex gap-4 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
            >
              <img
                src="src/assets/playlist.svg"
                alt="재생목록"
                className="h-8 w-8"
              />
              <span>재생목록</span>
            </a>
            <a
              href="#"
              className="flex gap-6 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
            >
              <img
                src="src/assets/myPlay.svg"
                alt="내 동영상"
                className="h-6 w-6"
              />
              <span>내 동영상</span>
            </a>
            <a
              href="#"
              className="flex gap-6 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
            >
              <img
                src="src/assets/laterList.svg"
                alt="laterList"
                className="h-6 w-6"
              />
              <span className="truncate w-full">나중에 볼 동영상</span>
            </a>
            <a
              href="#"
              className="flex gap-6 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
            >
              <img
                src="src/assets/thumb_up.svg"
                alt="thumb_up"
                className="h-6 w-6"
              />
              <span className="truncate w-full">좋아요 표시한 동영상</span>
            </a>
            <a
              href="#"
              className="flex gap-6 p-2 text-[16px] items-center text-white rounded-xl h-[40px] w-[204px] transition-opacity duration-200 hover:bg-[#3f3f3f]"
            >
              <img
                src="src/assets/offline.svg"
                alt="offline"
                className="h-6 w-6"
              />
              <span className="truncate w-full">오프라인 저장 동영상</span>
            </a>
            <hr className="border-b-1 border-[#3f3f3f] relative top-2" />
          </div>
        </div>
      </div>
    </>
  );
}
