import React from "react";
import TheContent from "../container/TheContent";
import TheHeader from "../container/TheHeader";
import TheSidebar from "../container/TheSidebar";

export default function TheLayout() {
  return (
    <React.Fragment>
      <section className="_dashboard_wrapper">
        <div className="_dashboard_flex">
          <TheSidebar />
          <div className="_the_content_wrap">
            <TheHeader />
            <TheContent />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
