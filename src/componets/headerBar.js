import React from "react";

const HeaderBar = (props) => {

  return (
    <header className="ui teal inverted top fixed menu item">
      <div className="item">
        <img style={{
          width: '256px',
          height: '64px'
        }} src="/img/brand.png" />
      </div>
    </header>
  );
};

export default HeaderBar;