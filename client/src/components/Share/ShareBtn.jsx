import React, { useState } from "react";
import { ShareSocial } from "react-share-social";

const ShareBtn = ({ setIsShare }) => {
  // We can use inline-style
  const style = {
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      width: "50vw",
    },
    container: {
      color: "white",
      position: "fixed",
      zIndex: "1500",
      left: "30%",
      top: "35%",
    },
    copyContainer: {
      border: "1px solid blue",
      background: "rgb(0,0,0,0.7)",
    },
    title: {
      color: "aquamarine",
      fontStyle: "italic",
    },
    close_share_btn: {
      width: "auto",
      display: "flex",
      padding: "16px",
      justifyContent: "flex-end",
      background: "black",
    },
  };

  return (
    <div style={style.container}>
      <div style={style.close_share_btn}>
        <span onClick={() => setIsShare(false)}>
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
      <ShareSocial
        url="https://www.geeksforgeeks.org/"
        socialTypes={[
          "facebook",
          "twitter",
          "whatsapp",
          "twitter",
          "linkedin",
          "telegram",
          "reddit",
          "line",
          "instapaper",
          "hatena",
          "email",
        ]}
        style={style}
      />
    </div>
  );
};

export default ShareBtn;
