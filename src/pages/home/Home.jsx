import React from "react";
import Navbar from "../../componnet/navbar/Navbar";
import Sidebar from "../../componnet/sidebar/Sidebar";
import Feed from "../../componnet/feed/Feed";
import Rightbar from "../../componnet/rightbar/Rightbar";

function home() {
  return (
    <div>
      <Navbar />
      <div className="home-cont row">
        <div className="col-xl-3 col-lg-3 col-sm-4">
          <Sidebar />
        </div>
        <div className="col-xl-5 col-lg-5 col-sm-8">
          <Feed />
        </div>
        <div className="col-xl-4 col-lg-4 col-sm-12">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default home;
