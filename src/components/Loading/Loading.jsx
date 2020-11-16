import React from "react";
import "./loadingStyles.scss";

const Loading = () => {
  return (
    <div id="contentLoading">

      <div class="content">
        <div class="loading">
          <p>Cargando...</p>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
