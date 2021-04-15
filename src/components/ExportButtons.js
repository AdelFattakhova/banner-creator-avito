import '../styles/export-button.css'
import {useState} from "react";

function ExportButtons(props) {
    const [isCopied, setIsCopied] = useState(false);

    function copy(objectToCopy) {
        const clipboardCopy = new Promise((res, rej) => {
            res(navigator.clipboard.writeText(objectToCopy));
        })
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false)
                    , 1000)
            })
    }

    return (
        <div className="buttons">
            <button className="button" id="download">
                Скачать PNG
            </button>
            <button className="button" id="copy-html"
                    onClick={() => {
                        let bannerHTML = document.querySelector("#banner").innerHTML;
                        copy(bannerHTML);
                    }}>
                {isCopied ? "Скопировано" : "Скопировать как HTML"}
            </button>
            <button className="button" id="copy-conf">
                Скопировать конфигурацию
            </button>
        </div>
    );
}

export default ExportButtons;
