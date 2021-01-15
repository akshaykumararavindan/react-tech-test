import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PropContext } from "../App";

const MemeDetails = () => {
  const {
    object: { pass },
  } = useContext(PropContext);
  return (
    <>
      {pass ? (
        <>
          <Link to="/">Go Back</Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              margin: "auto",
              justifyContent: "center",
              height: "50%",
              width: "50%",
              border: "1px solid black",
            }}
          >
            <img
              style={{ width: "auto", height: 300 }}
              src={pass.url}
              alt={pass.name}
            />
            <ul>
              <li>
                <span style={{ fontWeight: "bold" }}>ID: </span>
                {pass.id}
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Box Count: </span>
                {pass.box_count}
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Name: </span>
                {pass.name}
              </li>
              <a href={pass.url}>
                <li>Image Url</li>
              </a>
              <li>
                <span style={{ fontWeight: "bold" }}>Width: </span>
                {pass.width}
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Height: </span>
                {pass.height}
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div style={{ margin: "auto", justifyContent: "center", width: "50%" }}>
          <Link to="/">Go Back</Link>
          Please go back to select an image.
        </div>
      )}
    </>
  );
};

export default MemeDetails;
