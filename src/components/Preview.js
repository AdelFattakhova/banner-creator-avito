import '../styles/preview.css'

function Preview(props) {
    const imageStyle = {
        height: "60%",
        backgroundImage: `url(${props.image})`,
    }

    return (
        <div id="banner">
            <div className="banner" style={{backgroundColor: props.color}}>
                {props.link && <a className="banner__link" href={props.link} target="_blank"></a>}
                {props.image
                    ? <div className="banner__image" style={imageStyle}></div>
                    : <div className="banner__image"></div>}
                <p className="banner__text">
                    {props.text || "Текст на баннере"}
                </p>
            </div>
        </div>
    );
}

export default Preview;
