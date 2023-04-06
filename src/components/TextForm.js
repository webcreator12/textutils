import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUppercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Convert to UpperCase","success")
    }

    const onChange = (event) => {
        setText(event.target.value);
    }

    const handleLowerCase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Convert to LowerCase","success")
    }

    const Removetext = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Remove all text","success")
    }

    const CopyText = () => {  
        var copyText = document.getElementById("myBox");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copy to All text","success")
    }

    const RenoveExtraSpace = () => {
        let allText = text.split(/[ ]+/);
        setText(allText.join(' '))
        props.showAlert("Remove Extra Space","success")
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container my-3'  >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id='myBox' style={{
                        backgroundColor: props.mode === 'light' ? 'white' : '#133150',
                        color: props.mode === 'light' ? '#133150' : 'white'
                    }} value={text} onChange={onChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 mt-3" onClick={handleUppercase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 mt-3" onClick={handleLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 mt-3" onClick={Removetext}>Clear</button>
                <button className="btn btn-primary mx-2 mt-3" onClick={CopyText}>Copy </button>
                <button className="btn btn-primary mx-2 mt-3" onClick={RenoveExtraSpace}>Remove Extra Space</button>
            </div>

            <div className='container my-3'>
                <h1>Your Text Word Summary</h1>
                <p> {text.split(" ").length} Word {text.length} Character</p>
                <p>{0.008 * text.split(" ").length}Minutes reads</p>
                <h2>Previews</h2>
                <p>{text}</p>
            </div>


        </>
    )
}

TextForm.Prototypes = { tittle: PropTypes.string }