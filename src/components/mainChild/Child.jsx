import React from "react";
import CardList from "../cardList/CardList";
import PopularList from "../cardList/popularList";

function Child() {
  return (
    <>
      <div className="main-child">
        <CardList />
        <PopularList />
      </div>
    </>
  );
}

export default Child;
