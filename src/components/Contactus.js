import React from 'react'

export default function Contactus(props) {
    return (
        <>
            <div className="container mt-4">
                <form className="px-4 py-3">
                    <h1 className='text-center'>Contact Us</h1>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormName">Name</label>
                        <input type="text" style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#133150',
                            color: props.mode === 'light' ? '#133150' : 'white'
                        }} className="form-control my-2" id="exampleDropdownFormName" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleDropdownFormSubject">Subject</label>
                        <input type="text" style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#133150',
                            color: props.mode === 'light' ? '#133150' : 'white'
                        }} className="form-control my-2" id="exampleDropdownFormSubject"/>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleDropdownFormMessage">Message</label>
                        <textarea style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#133150',
                            color: props.mode === 'light' ? '#133150' : 'white'
                        }} className="form-control my-2" rows="8" id="exampleDropdownFormMessage"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Sumbit</button>
                </form>
            </div>
        </>
    )
}
