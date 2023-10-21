import TTTmodel from "../model/TTTmodel.js";
import Jatekter from "../view/Jatekter.js";

class TTTcontroller {
  constructor() {
    new Jatekter($(".jatekter"), 3);
    this.tttModel = new TTTmodel();

    $(window).on("elemKivalaszt", (event) => {
      console.log(event.detail);
      //itt hivom a modelt hogy szamoljon
      let ertek = this.tttModel.kiköv();
      event.detail.setErtek(ertek);
    });
  }
}
export default TTTcontroller;
