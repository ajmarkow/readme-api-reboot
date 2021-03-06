import React from "react";
import "./App.css";
import Report from "./components/Report";
import { Container } from "react-bootstrap";
import GithubCorner from "react-github-corner";

function App() {
  return (
    <React.Fragment>
      <Container className="align-items-left">
        <GithubCorner
          bannerColor="#3dcfc2"
          href="https://github.com/ajmarkow/readme-api-reboot"
          alt="The README for README Check"
        />
        <div className="row py-4 px-3">
          <div ClassName="col-12 align-items-left">
            <span>
              <h2 name="top" className="text-nowrap">
                Github README Check
              </h2>
              <p>
                Check if any of your public Github Repositories don't have a
                README.
              </p>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-10 headingpadding">
            <Report />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
