import React from "react";
import "./urlList.css";

class UrlList extends React.Component {
  state = {
    dense: false,
    secondary: true
  };

  render() {
    return (
      <div className="urlList">
        <h3 className="typographyTitle">{this.props.listTitle}</h3>
        {[...this.props.urlList].reverse().map((data, index) => {
          return (
            <div key={index} className="historyList">
              <div className="topURL divs">
                <span className="urlNumber">{index + 1}</span>
                <span className="urlItem">
                  {"Short url: "}
                  <a
                    className="urlLink"
                    href={`${data.originalURL}`}
                    target="_blank"
                  >
                    {data.shortURL}
                  </a>
                </span>
              </div>

              <div className="bottomURL divs">
                <span className="urlItem paddingLeft">
                  {"Original url: "}
                  <a
                    className="urlLink"
                    href={data.originalURL}
                    target="_blank"
                  >
                    {data.originalURL}
                  </a>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UrlList;
