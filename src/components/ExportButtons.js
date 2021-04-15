import '../styles/export-button.css'
import {useState} from "react";

function ExportButtons(props) {
    const [isHtmlCopied, setIsHtmlCopied] = useState(false);
    const [isConfigCopied, setIsConfigCopied] = useState(false);

    function copy(objectToCopy, type) {
        const clipboardCopy = new Promise((res, rej) => {
            res(navigator.clipboard.writeText(objectToCopy));
        })
            .then(() => {
                if (type === "html"){
                    setIsHtmlCopied(true);
                    setTimeout(() => setIsHtmlCopied(false)
                        , 1000)
                } else {
                    setIsConfigCopied(true);
                    setTimeout(() => setIsConfigCopied(false)
                        , 1000)
                }
            })
    }

    return (
        <div className="buttons">
            <button className="button" id="download">
                Скачать PNG
            </button>
            <button className="button"
                    onClick={() => {
                        let bannerHTML = document.querySelector("#banner").innerHTML;
                        copy(bannerHTML, "html");
                    }}>
                {isHtmlCopied ? "Скопировано" : "Скопировать как HTML"}
            </button>
            <button className="button"
                    onClick={() => {
                        let config = JSON.stringify(props);
                        copy(config, "config");
                    }}>
                {isConfigCopied ? "Скопировано" : "Скопировать конфигурацию"}
            </button>
        </div>
    );
}

export default ExportButtons;
