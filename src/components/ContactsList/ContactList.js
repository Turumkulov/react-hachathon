import React from "react";
import "./ContactList.css";

const ContactList = (props) => {
    console.log(props);
    return (
        <div className="main-div">
            {props.contacts.map((item, index) => (
                <ul className="inform-cart" key={item.id}>
                    <li className="title">{item.name}</li>
                    <li className="description">{item.surName}</li>
                    <li>
                        <button
                            className="btn-delete"
                            onClick={() => props.handleDeleteContacts(item.id)}
                        >
                            Delete
                        </button>
                    </li>
                    <button
                        className="btn-edit"
                        onClick={() => props.handleEditIndex(index)}
                    >
                        Edit
                    </button>
                </ul>
            ))}
        </div>
    );
};

export default ContactList;
