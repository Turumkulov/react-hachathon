import React, { useState } from "react";
import "./EditContact.css";

const EditContacts = (props) => {
    let [name, setName] = useState(props.editContact.name);
    let [surName, setSurName] = useState(props.editContact.surName);
    console.log(name);

    function handleSaveClick() {
        let contact = { ...props.editContact };
        contact.name = name;
        contact.surName = surName;

        props.handleSaveEditedContact(contact);

        setName("");
        setSurName("");
    }
    return (
        <div className="modal">
            <input
                className="inp-modal"
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Название"
                value={name}
            />
            <input
                className="inp-modal"
                onChange={(e) => setSurName(e.target.value)}
                type="text"
                placeholder="Описание"
                value={surName}
            />
            <button className="modal-btn" onClick={handleSaveClick}>
                Save
            </button>
        </div>
    );
};

export default EditContacts;
