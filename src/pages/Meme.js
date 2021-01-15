import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PropContext } from "../App";

const Meme = () => {
  const [memes, setMemes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openImage, setOpenImage] = useState(null);
  const [pass, setPass] = useState({});
  const { setObject } = useContext(PropContext);

  const handleClick = (meme) => {
    setOpenImage(meme);
  };

  const getMemes = async () => {
    setLoading(true);
    const result = await axios("https://api.imgflip.com/get_memes", {
      method: "GET",
    });
    setMemes(result);
    if (result) setLoading(false);
  };

  useEffect(() => {
    getMemes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        {!loading && memes ? (
          <>
            <div style={{ float: "left", width: "50%" }}>
              {memes.data.data.memes.map((meme, idx) => (
                <div key={idx} style={{ border: "1px solid black" }}>
                  <img
                    style={{ width: "auto", height: 300 }}
                    src={meme.url}
                    alt={meme.name}
                  />
                  <p></p>
                  <button
                    onClick={() => {
                      handleClick({
                        name: meme.name,
                        url: meme.url,
                        id: meme.id,
                        idx: idx,
                      });
                      setPass(meme);
                    }}
                  >
                    {meme.name}
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ float: "left", width: "50%" }}>loading...</div>
        )}
        {openImage ? (
          <div style={{ float: "right", width: "50%" }}>
            <img
              style={{ width: "auto", height: 300, float: "right" }}
              src={openImage.url}
              alt={openImage.name}
            />
            <p>{openImage.name}</p>
            <Link
              to="/details"
              onClick={() => {
                setObject({ pass });
              }}
            >
              View more...
            </Link>
          </div>
        ) : (
          <div style={{ margin: "auto", float: "right", width: "50%" }}>
            Click on an image
          </div>
        )}
      </div>
    </>
  );
};

export default Meme;
