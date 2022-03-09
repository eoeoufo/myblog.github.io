 var jsonModel = [
    "https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json",// 初音
    "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",// 萌娘
    "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json",// 小可爱（女）
    "https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json",// 小可爱（男）
"https://unpkg.com/live2d-widget-model-hibiki@1.0.5/assets/hibiki.model.json",//hibiki美女
"https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json",//黑猫
"https://unpkg.com/live2d-widget-model-ni-j@1.0.5/assets/ni-j.model.json",
"https://unpkg.com/live2d-widget-model-nipsilon@1.0.5/assets/nipsilon.model.json",
"https://unpkg.com/live2d-widget-model-nito@1.0.5/assets/nito.model.json",
"https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json",
"https://unpkg.com/live2d-widget-model-tsumiki@1.0.5/assets/tsumiki.model.json",
"https://unpkg.com/live2d-widget-model-unitychan@1.0.5/assets/unitychan.model.json",
"https://unpkg.com/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json",
"https://unpkg.com/live2d-widget-model-z16@1.0.5/assets/z16.model.json"
    ];
    L2Dwidget.init({ 
        "model": { 
            "jsonPath": jsonModel[Math.floor(Math.random()*(jsonModel.length))],
            "scale": 1 
        }, 
        "display": { 
            "position": "right", // 位置left、right
            "width": 80, // 宽度
            "height":180, // 高度
            "hOffset": 0, // 横向边距
            "vOffset": -20 // 众向边距
        }, 
        "mobile": { 
            "show": false // 手机是否显示
        },
 "react": {
            "opacityDefault": 1,
            "opacityOnHover": 1
        }
    });