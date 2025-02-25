const pages = [
    "pages/index/index"
];

const tabBar = {
    custom: true,
    list: [{
        pagePath: "pages/index/index",
        text: "示例"
    }]
};

const subpackages = [{
    root: "pages-subpackage",
    pages: [
        "demo/index",
    ]
}];

const preloadRule = {
    "pages/index/index": {
        "packages": ["pages-subpackage"]
    },
};

export default defineAppConfig({
    pages: pages,
    tabBar: tabBar,
    subpackages: subpackages,
    preloadRule: preloadRule,
    window: {
        navigationStyle: "custom",
        enablePullDownRefresh: false,
        initialRenderingCache: "static",
        restartStrategy: "homePageAndLatestPage",
        handleWebviewPreload: "static",
    },
    lazyCodeLoading: "requiredComponents",
    renderer: "skyline",
    rendererOptions: {
        skyline: {
            defaultDisplayBlock: true,
        }
    },
    componentFramework: "glass-easel",
})
