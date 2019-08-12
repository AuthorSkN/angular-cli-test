import {environment} from "../../../environments/environment";

let canGetTheme = true,
    currentStylesheet, themes, prodThemes;

export class UxThemeHelper {

    public static init(currentThemes?: any): void {
        themes = currentThemes;
        window["uxThemeHelperCurrentTheme"] = window["uxThemeHelperCurrentTheme"] ? window["uxThemeHelperCurrentTheme"] : "base";

        handleTheme();
    }

    public static changeTheme(currentThemeName: string): void {
        if (window["uxThemeHelperCurrentTheme"] === currentThemeName) {
            return;
        }

        window["uxThemeHelperCurrentTheme"] = currentThemeName;

        if (environment.themes) {
            handleTheme();
        } else {
            handleProdTheme();
        }
    }
}



/* Helpers */
function handleProdTheme(): void {
    if (document.head && canGetTheme) {

        if (!prodThemes) {
            canGetTheme = false;
            let xhr = new XMLHttpRequest();

            xhr.open("GET", "./assets/rev-manifest.json", true);

            xhr.send();

            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) {
                    return;
                }

                if (xhr.status !== 200) {
                    console.warn("can't get rev-manifest.json", xhr.status, xhr.statusText);
                } else {

                    try {
                        prodThemes = JSON.parse(xhr.responseText);

                        let obj = {};

                        for (let key in prodThemes) {
                            obj[key.split(".")[0]] = key;
                        }

                        prodThemes = obj;

                        if (prodThemes[`${window["uxThemeHelperCurrentTheme"]}`]) {
                            createLinkStylesheet(prodThemes[`${window["uxThemeHelperCurrentTheme"]}`]);
                            applyStylesheet(currentStylesheet);
                            currentStylesheet.addEventListener("load", function() {
                                removeStylesheet(document.getElementById("uxCurrentLinkStylesheetID"));
                                currentStylesheet.setAttribute("id", "uxCurrentLinkStylesheetID");
                                canGetTheme = true;
                            });
                        } else {
                            console.warn(`There is no ${window["uxThemeHelperCurrentTheme"]} theme in rev-manifest.json!`);
                        }
                    } catch (error) {
                        console.warn("Can not parse rev-manifest.json ", error);
                    }
                }
            };
        } else {
            canGetTheme = false;
            createLinkStylesheet(prodThemes[`${window["uxThemeHelperCurrentTheme"]}`]);
            applyStylesheet(currentStylesheet);
            currentStylesheet.addEventListener("load", function() {
                removeStylesheet(document.getElementById("uxCurrentLinkStylesheetID"));
                currentStylesheet.setAttribute("id", "uxCurrentLinkStylesheetID");
                canGetTheme = true;
            });
        }
    }
}

function handleTheme(): void {
    if (document.head && document.getElementById("uxCurrentStylesheetID")) {
        removeStylesheet(document.getElementById("uxCurrentStylesheetID"));
    }

    createStylesheet();
    applyStylesheet(currentStylesheet);
}

function createStylesheet(): void {
    const stylesheet = document.createElement("style");
    stylesheet.id = "uxCurrentStylesheetID";
    stylesheet.innerHTML = themes[window["uxThemeHelperCurrentTheme"]];
    currentStylesheet = stylesheet;
}

function createLinkStylesheet(href: string): void {
    const stylesheet = document.createElement("link");
    stylesheet.href = href;
    stylesheet.rel = "stylesheet";
    currentStylesheet = stylesheet;
}

function applyStylesheet(element: Element): void {
    document.head.appendChild(element);
}

function removeStylesheet(element: Element): void {
    if (element) {
        document.head.removeChild(element);
    }
}

