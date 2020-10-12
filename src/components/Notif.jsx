import React from "react";
import "../scss/Notif.scss";
import "../scss/Keyframes.scss";
import { IoMdClose } from "react-icons/io";

const Notif = ({ title, phrase, color, icons, animations }) => {
  const handleClose = () => {
    document.getElementsByClassName("notif")[0].style = "display: none;";
  };

  return (
    <>
      <div
        className={
          "notif notif-anim-" + animations + " notif-border-" + color + ""
        }
      >
        <div className="notif-content">
          <div
            className="border-left"
            style={{ background: "#" + color + "" }}
          ></div>
          <div className="icon" style={{ background: "#" + color + "" }}>
            {icons}
          </div>
          <div className="text">
            <p className="title">{title}</p>
            <p className="phrase">{phrase}</p>
          </div>
          <div className="cross">
            <IoMdClose onClick={handleClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notif;
