import React, {PropsWithChildren} from "react";
import {observer} from "mobx-react";
import {configure} from "mobx";
import "./app.less";

// Mobx关闭严格模式
configure({enforceActions: "never"});

interface Props {

}

const App: React.FC<PropsWithChildren<Props>> = observer(props => {

    Taro.useLaunch(() => {

    });

    return (
        <>
            {props.children}
        </>
    );
});

export default App;