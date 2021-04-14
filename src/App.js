import React, { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContacts/AddContacts";
import ContactList from "./components/ContactsList/ContactList";
import EditContacts from "./components/EditContacts/EditContacts";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    let [contacts, setContacts] = useState([]);
    let [editContact, setEditContact] = useState({});
    let [isEdit, setIsEdit] = useState(false);

    function handleNewContact(newContact) {
        let newContactsArray = [...contacts];
        newContactsArray.push(newContact);

        setContacts(newContactsArray);
    }

    function handleDeleteContacts(id) {
        let newContactsArray = contacts.filter((item) => {
            return item.id !== id;
        });
        setContacts(newContactsArray);
    }

    function handleEditIndex(index) {
        setEditContact(contacts[index]);
        setIsEdit(true);
    }

    function handleSaveEditedContact(newContact) {
        let newContactsArray = contacts.map((item) => {
            if (item.id === newContact.id) {
                return newContact;
            }
            return item;
        });

        setContacts(newContactsArray);
        setIsEdit(false);
    }

    return (
        <div className="App">
            <Header />
            <AddContact handleNewContact={handleNewContact} />
            <ContactList
                contacts={contacts}
                handleDeleteContacts={handleDeleteContacts}
                handleEditIndex={handleEditIndex}
            />
            {isEdit ? (
                <EditContacts
                    editContact={editContact}
                    handleSaveEditedContact={handleSaveEditedContact}
                />
            ) : null}
            <Footer />
        </div>
    );
}

export default App;
