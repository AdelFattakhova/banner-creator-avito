import Form from './components/Form';
import Preview from "./components/Preview";
import Header from "./components/Header";
import {useState} from "react";
import ExportButton from "./components/ExportButton";

function App() {
    const [formState, setFormState] = useState( {
        image: '',
        text: '',
        color: '#9886a2',
        link: ''
    });

    function handleFormChange(input) {
        const name = input.name;
        const value = input.value;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return (
        <>
            <Header/>
            <main className="main">
                <Preview {...formState}/>
                <Form {...{...formState, handleFormChange}}/>
                <section className="buttons">
                    <ExportButton/>
                </section>
            </main>
        </>
    );
}

export default App;
