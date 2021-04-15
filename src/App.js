import Form from './components/Form';
import Preview from "./components/Preview";
import Header from "./components/Header";
// import Modal from "./components/Modal"
import {useState} from "react";
import ExportButtons from "./components/ExportButtons";

function App() {
    const [formState, setFormState] = useState({
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
                <ExportButtons/>
            </main>
        </>
    );
}

export default App;
