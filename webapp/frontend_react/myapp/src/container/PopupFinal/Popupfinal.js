import { AiOutlineCloseSquare } from "react-icons/ai";
import DidIt from "./didit.png";
import SuccessFinal from "./successfinal.mp3";
const PopupFinal = ({ setIsOpenPopup }) => {
  return (
    <div
      onClick={setIsOpenPopup.bind(this, false)}
      style={{
        position: "fixed",
        zIndex: 9999,
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "transparent",
          borderRadius: "8px",
          width: "60%",
          height: "60%",
          padding: "20px 10px",
          animation: "dropTop .3s linear",
        }}
      >
        <div>
          <div
            onClick={setIsOpenPopup.bind(this, false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            {/*<AiOutlineCloseSquare />*/}
          </div>
        </div>
        {/* Body */}
        <div>
          <img
            src={DidIt}
            alt="Description"
            style={{
              position: "relative",
              marginTop: "15%",
              margin: "0 auto",
              width: "200%", // Set width to 100% of the container
              height: "auto", // Adjust height automatically to maintain aspect ratio
              maxWidth: "500px",
            }}
          />
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "Comic Sans MS",
              position: "absolute",
              top: "120%",
              left: "27%",
              fontSize: "250%",
              color: "#5DFFB3",
            }}
          ></p>
          <audio autoPlay style={{ display: "none" }}>
            <source src={SuccessFinal} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* Footer */}
      </div>
    </div>
  );
};
export default PopupFinal;
