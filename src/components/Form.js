import '../styles/form.css';

function Form(props) {
    function handleChange(e) {
        props.handleFormChange(e.target);
    }

    return (
        <form className="form">
            <label className="label">
                Иллюстрация
                <textarea
                    name="image"
                    className="input input_image"
                    placeholder="Ссылка или dataURI"
                    value={props.image}
                    onChange={handleChange}/>
            </label>
            <label className="label">
                Текст
                <textarea
                    name="text"
                    className="input input_text"
                    placeholder="Текст на баннере"
                    value={props.text}
                    onChange={handleChange}/>
            </label>
            <label className="label">
                Фон
                <input
                    name="color"
                    className="input input_color"
                    type="color"
                    value={props.color}
                    onChange={handleChange}/>
            </label>
            <label className="label">
                Ссылка
                <input
                    name="link"
                    className="input input_link"
                    type="text"
                    placeholder="Ссылка для баннера"
                    value={props.link}
                    onChange={handleChange}/>
            </label>
        </form>
    );
}

export default Form;
