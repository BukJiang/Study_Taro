import {makeAutoObservable} from "mobx";

interface Env {
    api: string | undefined;
    product: number;
    app: {
        name: string;
        shortName: string;
    }
}

interface NavBar {
    height: number;
    padding: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    menu: {
        width: number;
        height: number;
    };
    title: {
        color: string;
    }
}

interface TabBar {
    height: number;
}

class AppStore {

    // 环境信息
    env: Env = {
        api: process.env.TARO_APP_API,
        product: 0,
        app: {
            name: "",
            shortName: "",
        }
    };
    // 系统信息
    system: Taro.System = Taro.getSystemInfoSync();
    // 按钮信息
    menu: Taro.Menu = Taro.getMenuButtonBoundingClientRect();
    // 导航栏信息
    navBar: NavBar = {
        height: this.menu.top + this.menu.height,
        padding: {
            top: this.menu.top,
            right: this.system.screenWidth - this.menu.right,
            bottom: 10,
            left: this.system.screenWidth - this.menu.right,
        },
        menu: {
            width: Math.floor(this.menu.width / 2) - 1,
            height: this.menu.height,
        },
        title: {
            color: "#000000"
        }
    };
    // 标签栏信息
    tabBar: TabBar = {
        height: 108,
    }

    constructor() {
        makeAutoObservable(this);
    }

    console = () => {
        console.log("[环境信息]", this.env);
        console.log("[系统信息]", this.system);
        console.log("[按钮信息]", this.menu);
        console.log("[导航栏信息]", this.navBar);
        console.log("[标签栏信息]", this.tabBar);
    }
}

const appStore = new AppStore();
export default appStore;
export {
    AppStore
};