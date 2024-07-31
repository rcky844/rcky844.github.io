// Extracted from Viola Browser as of 31 July, 2024
const homePagePlaceholder = "{home}"; // ntp specific
const queryPlaceholder = "{query}";
const languagePlaceholder = "{language}";

var engines = {
    "google": {
        "name": "Google",
        "homePage": "https://www.google.com",
        "search": "{home}/search?q={query}",
        "suggestion": "https://suggestqueries.google.com/complete/search?client=android&oe=utf8&ie=utf8&q={query}&hl={language}",
    },
    "baidu": {
        "name": "Baidu",
        "homePage": "https://www.baidu.com",
        "search": "{home}/s?wd={query}",
        "suggestion": "https://suggestion.baidu.com/su?ie=UTF-8&wd={query}&action=opensearch",
    },
    "duckduckgo": {
        "name": "DuckDuckGo",
        "homePage": "https://www.duckduckgo.com",
        "search": "{home}/?q={query}",
        "suggestion": "{home}/ac/?q={query}&type=list",
    },
    "bing": {
        "name": "Bing",
        "homePage": "https://www.bing.com",
        "search": "{home}/search?q={query}",
        "suggestion": "https://api.bing.com/osjson.aspx?query={query}&language={language}",
    },
    "yahoo": {
        "name": "Yahoo!",
        "homePage": "https://search.yahoo.com",
        "search": "{home}/search?p={query}",
        "suggestion": "https://sugg.search.yahoo.net/sg/?output=fxjson&command={query}",
    },
    "ecosia": {
        "name": "Ecoasia",
        "homePage": "https://www.ecosia.org",
        "search": "{home}/search?q={query}",
        "suggestion": "https://ac.ecosia.org/autocomplete?q={query}&type=list",
    },
    "yandex": {
        "name": "Yandex",
        "homePage": "https://yandex.com",
        "search": "{home}/search/?text={query}",
        "suggestion": "{home}/suggest/suggest-ya.cgi?v=4&part={query}",
    },
    "brave": {
        "name": "Brave Search",
        "homePage": "https://search.brave.com",
        "search": "{home}/search?q={query}",
        "suggestion": "{home}/api/suggest?q={query}",
        "default": true,
    },
    "startpage": {
        "name": "Startpage",
        "homePage": "https://www.startpage.com",
        "search": "{home}/do/search?query={query}",
        "suggestion": "{home}/suggestions?q={query}",
    },
    "whoogle": {
        "name": "Whoogle",
        "homePage": "https://whoogle.io",
        "search": "{home}/search?q={query}",
        "suggestion": "{home}/autocomplete?q={query}",
    },
    "swisscows": {
        "name": "Swisscows",
        "homePage": "https://swisscows.com",
        "search": "{home}/web?query={query}",
        "suggestion": "https://api.swisscows.com/suggest?query={query}",
    },
    "qwant": {
        "name": "Qwant",
        "homePage": "https://www.qwant.com",
        "search": "{home}/?q={query}",
        "suggestion": "https://api.qwant.com/v3/suggest?q={query}",
    },
    "sogou": {
        "name": "Sogou",
        "homePage": "https://www.sogou.com",
        "search": "{home}/web?query={query}",
        "suggestion": "https://sor.html5.qq.com/api/getsug?key={query}",
    },
    "so360": {
        "name": "360 Search",
        "homePage": "https://www.so.com",
        "search": "{home}/s?q={query}",
        "suggestion": "https://sug.so.360.cn/suggest?word={query}",
    },
}
