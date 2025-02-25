import React, {PropsWithChildren} from "react";
import {observer} from "mobx-react";
import {View} from "@tarojs/components";
import styles from "./index.module.less";

interface Props {

}

const Index: React.FC<PropsWithChildren<Props>> = observer(() => {

    return (
        <View className={styles.tab_bar}>

        </View>
    );
});

export default Index;