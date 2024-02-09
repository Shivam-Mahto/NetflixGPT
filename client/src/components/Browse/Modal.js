import React from "react";

const Modal = ({ modal, setModal }) => {
  return (
    <>
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed h-screen w-screen z-50 bg-black bg-opacity-80 flex justify-center items-center"
        >
          <div className="w-full sm:w-1/2 aspect-video z-50">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${modal}?playlist=${modal}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
