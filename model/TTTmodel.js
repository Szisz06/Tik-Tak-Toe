class TTTmodel{
    #ertek
    #lepes
    constructor(){
        this.#lepes = 0;
        this.#ertek = "";
    }
    kiköv(){
        this.#lepes++;
            if (this.#lepes % 2 == 0) {
                this.#ertek = "X";
            } else {
                this.#ertek = "O";
            }
        return this.#ertek;
    }
}
export default TTTmodel;