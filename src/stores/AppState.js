
import {observable, action} from 'mobx';



class AppState {
    @observable Login='aidin';
    @observable OverLay='';


    constructor() {


    }

    @action
    setOverLay(id) {
        console.log("++++")
        console.log(id)
        this.OverLay = id;
    }

}

const state = new AppState();

export default state;