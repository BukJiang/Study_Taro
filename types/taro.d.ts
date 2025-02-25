declare namespace Taro {

    /** 系统信息 */
    interface System {
        /** 设备品牌 */
        brand: string
        /** 设备型号 */
        model: string
        /** 设备像素比 */
        pixelRatio: number
        /** 屏幕宽度，单位px */
        screenWidth: number
        /** 屏幕高度，单位px */
        screenHeight: number
        /** 可使用窗口宽度，单位px */
        windowWidth: number
        /** 可使用窗口高度，单位px */
        windowHeight: number
        /** 状态栏的高度，单位px */
        statusBarHeight?: number
        /** 微信设置的语言 */
        language: string
        /** 微信版本号 */
        version?: string
        /** 操作系统及版本 */
        system: string
        /** 客户端平台 */
        platform: string
        /** 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准 */
        fontSizeSetting?: number
        /** 客户端基础库版本 */
        SDKVersion?: string
        /** 设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50） */
        benchmarkLevel: number
        /** 允许微信使用相册的开关（仅 iOS 有效） */
        albumAuthorized?: boolean
        /** 允许微信使用摄像头的开关 */
        cameraAuthorized?: boolean
        /** 允许微信使用定位的开关 */
        locationAuthorized?: boolean
        /** 允许微信使用麦克风的开关 */
        microphoneAuthorized?: boolean
        /** 允许微信通知的开关 */
        notificationAuthorized?: boolean
        /** 允许微信通知带有提醒的开关（仅 iOS 有效） */
        notificationAlertAuthorized?: boolean
        /** 允许微信通知带有标记的开关（仅 iOS 有效） */
        notificationBadgeAuthorized?: boolean
        /** 允许微信通知带有声音的开关（仅 iOS 有效） */
        notificationSoundAuthorized?: boolean
        /** 允许微信使用日历的开关 */
        phoneCalendarAuthorized?: boolean
        /** 蓝牙的系统开关 */
        bluetoothEnabled?: boolean
        /** 地理位置的系统开关 */
        locationEnabled?: boolean
        /** Wi-Fi 的系统开关 */
        wifiEnabled?: boolean
        /** 在竖屏正方向下的安全区域 */
        safeArea?: TaroGeneral.SafeAreaResult
        /** `true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持 */
        locationReducedAccuracy?: boolean
        /** 系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏） */
        theme?: keyof Theme
        /** 当前小程序运行的宿主环境 */
        host?: Host
        /** 是否已打开调试。可通过右上角菜单或 [Taro.setEnableDebug](/docs/apis/base/debug/setEnableDebug) 打开调试。 */
        enableDebug?: boolean
        /** 设备方向 */
        deviceOrientation?: keyof DeviceOrientation
        /** 小程序当前运行环境 */
        environment?: string
    }

    /** 系统主题合法值 */
    interface Theme {
        /** 深色主题 */
        dark: string,
        /** 浅色主题 */
        light: string
    }

    /** 宿主环境 */
    interface Host {
        /** 宿主 app 对应的 appId */
        appId: string
    }

    /** 设备方向合法值 */
    interface DeviceOrientation {
        /** 竖屏 */
        portrait: string
        /** 横屏 */
        landscape: string
    }

    /** 菜单按钮的布局位置信息 */
    interface Menu {
        /** 下边界坐标，单位：px */
        bottom: number
        /** 高度，单位：px */
        height: number
        /** 左边界坐标，单位：px */
        left: number
        /** 右边界坐标，单位：px */
        right: number
        /** 上边界坐标，单位：px */
        top: number
        /** 宽度，单位：px */
        width: number
    }
}