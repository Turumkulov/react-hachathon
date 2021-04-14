import React, { useState } from "react";
import "./AddContact.css";

const AddContact = (props) => {
    let [name, setName] = useState("");
    let [surName, setSurName] = useState("");
    console.log(name);

    function handleClick() {
        let newContact = {
            name,
            surName,
            id: Date.now(),
        };
        props.handleNewContact(newContact);
        setName("");
        setSurName("");
    }

    return (
        <div className="main-add">
            <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Название"
                value={name}
            />
            <input
                onChange={(e) => setSurName(e.target.value)}
                type="text"
                placeholder="Описание"
                value={surName}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddContact;
