import React, { useState } from "react";
import './Popup.css'

const Popup = () => {
    const [bannerpopup, setBannerpopup] = useState(true);
    function closeItem() {
        setBannerpopup(false);
    }
    return (
        <div className={bannerpopup ? "openbanner" : "closebanner"}>
            <div className="container-diskon">
                <p
                    style={{
                        textAlign: "center",
                    }}
                >
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Sequi,
                    pariatur! cek sekarang juga
                </p>{" "}
                <button onClick={closeItem}>X</button>
            </div>
        </div>
    );
};

export default Popup;
