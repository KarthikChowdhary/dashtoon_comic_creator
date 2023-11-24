import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import "./sharebar.css";

const Sharebar = () => {
  const shareUrl = "https://your-website-url.com"; // Replace with your actual URL
  const title = "Check out this amazing content!"; // Replace with your content title

  return (
    <div className="share-container">
      <FacebookShareButton url={shareUrl} quote={title}>
        <button className="btn btn-info" type="button">
          Share on Facebook
        </button>
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <button className="btn btn-info" type="button">
          Share on Twitter
        </button>
      </TwitterShareButton>

      <LinkedinShareButton url={shareUrl} title={title}>
        <button className="btn btn-info" type="button">
          Share on LinkedIn
        </button>
      </LinkedinShareButton>
    </div>
  );
};

export default Sharebar;
