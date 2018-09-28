import react from "React";
import addItems from "./addItems";
import populateList from "./populateList";
import toggleDone from "./toggleDone";


const events = () => {
  addItems.addEventListener("submit", addItem);
  itemsList.addEventListener("click", toggleDone);

  populateList(items, itemsList);
};

export default events;