import React, { useState } from "react";
import "../scss/Home.scss";
import Notif from "../components/Notif";
import {
  IoIosSync,
  IoIosCheckmark,
  IoIosHeart,
  IoIosSettings,
  IoIosWarning,
  IoLogoUsd,
  IoMdHand,
  IoMdClose,
  IoMdRefresh
} from "react-icons/io";

const Home = () => {
  const [colors] = useState(["ffba49", "20a39e", "ef5b5b", "7D84B2", "1C6E8C"]);
  const [titles] = useState([
    "Run a shot across",
    "The bow bilge rat",
    "Yellow Jack Sail",
    "Fluke tackle port",
    "Brigantine prow mizzen"
  ]);
  const [phrases] = useState([
    "Hornswaggle quarterdeck hail-shot black jack !",
    "Blow the man down gaff bowsprit",
    "Crimp keelhaul maroon schooner",
    "Gally booty Pirate Round pillage",
    "Reef long boat ho run a rig"
  ]);
  const [icons] = useState([
    <IoIosSync />,
    <IoIosCheckmark />,
    <IoIosHeart />,
    <IoIosSettings />,
    <IoIosWarning />,
    <IoLogoUsd />,
    <IoMdHand />,
    <IoMdClose />
  ]);
  const [animations] = useState(["top", "left", "right"]);

  const [notif, setNotif] = useState({
    title: titles[Math.floor(Math.random() * titles.length)],
    phrase: phrases[Math.floor(Math.random() * phrases.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    icon: icons[Math.floor(Math.random() * icons.length)],
    animation: animations[Math.floor(Math.random() * animations.length)]
  });

  const handleRefresh = ({ currentTarget }) => {
    currentTarget.style = "border: none; transition: 0.5s;";
    document.getElementsByClassName("notif")[0].style = "display: none;";
    setTimeout(() => {
      document.getElementsByClassName("notif")[0].style = "display: block;";
      currentTarget.style = "border-bottom: 2px solid #fb8b24;transition: 0s;";
    }, 500);
    setNotif({
      title: titles[Math.floor(Math.random() * titles.length)],
      phrase: phrases[Math.floor(Math.random() * phrases.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      icon: icons[Math.floor(Math.random() * icons.length)],
      animation: animations[Math.floor(Math.random() * animations.length)]
    });
  };

  return (
    <>
      <div className="content">
        <Notif
          title={notif.title}
          phrase={notif.phrase}
          color={notif.color}
          icons={notif.icon}
          animations={notif.animation}
        />
        <div className="top-bar"></div>
        <div className="button-refresh" onClick={handleRefresh}>
          <IoMdRefresh />
          <p>Refresh</p>
        </div>
      </div>
    </>
  );
};

export default Home;
