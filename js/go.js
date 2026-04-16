async function doRedirect(jsonFilePath) {

    const msgTag = document.getElementById('msg');
    const hash = window.location.hash.replace('#', '');

    try {
        const response = await fetch(jsonFilePath);
        if (!response.ok) throw new Error('无法加载: ' + jsonFilePath + '\n状态码: ' + response.status);

        const linkMap = await response.json();

        if (hash === '') {
            // 情况 1: 没有加参数，直接跳转默认链接
            const defaultUrl = linkMap['default'];
            if (defaultUrl) {
                window.location.href = defaultUrl;
            } else {
                msgTag.innerText = jsonFilePath +" 没有默认跳转配置";
            }
        } else if (linkMap[hash]) {
            // 情况 2: 参数匹配成功
            window.location.href = linkMap[hash];
        } else {
            // 情况 3: 加了参数但匹配不到
            msgTag.innerText = "未检测到正确的跳转参数 点击上方按钮访问文档";
        }

    } catch (error) {
        console.error(error);
        msgTag.innerText = "加载配置失败 需要检查:";
        msgTag.innerText += "\n" + "1: " + "网络";
        msgTag.innerText += "\n" + "2: " + jsonFilePath;
        msgTag.innerText += "\n\n" + error.message;
    }
}

// 执行函数
doRedirect('../json/links.json');
