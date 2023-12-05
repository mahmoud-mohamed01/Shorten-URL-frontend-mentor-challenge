import React, { useRef, useState } from "react";
import "./urlGenerator.css";
import UrlResul from "../../UrlResult/UrlResul";
import axios from "axios";

function UrlGenerator() {
  const [links, setLinks] = useState([]);
  const l = useRef();

  async function handelclick() {
    let longlink = l.current.value;
    let shorterlink = "";

    const encodedParams = new URLSearchParams();
    encodedParams.set("url", longlink);

    const options = {
      method: "POST",
      url: "https://url-shortener-service.p.rapidapi.com/shorten",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "db128e04admshd583eb94cd19806p1b07b7jsn19caa4617c42",
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      shorterlink = response.data.result_url;
      setLinks(() => {
        return [...links, { oldLink: longlink, newLink: shorterlink }];
      });
    } catch (error) {
      console.error(error);
    }

    l.current.value = "";
  }

  return (
    <div className="url-container">
      <div className="url-input-box">
        <input placeholder="Shorten a link here" type="text" ref={l} />
        <button onClick={handelclick} className="shorten-btn">
          Shorten it!
        </button>
      </div>

      {links.map((link) => {
        return (
          <UrlResul oldLink={link.oldLink} newLink={link.newLink}></UrlResul>
        );
      })}
    </div>
  );
}

export default UrlGenerator;
