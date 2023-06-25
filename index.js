const contacts = require("./db/contacts")
const argv = require('yargs').argv;

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
      case 'list':
          const allList = await contacts.listContacts();
          return console.table(allList);
      case 'get':
          const contactById = await contacts.getContactById(id);
          if (!contactById) {
        console.log("WARNING! This contact was not found");
        }
          return console.log(contactById);
      case 'add':
          const newContact = await contacts.addContact({ name, email, phone });
          return console.log(newContact);
      case 'update':
          const updateContact = await contacts.updateById(id, { name, email, phone });
          return console.log(updateContact);
      case 'remove':
          const removeContact = await contacts.removeContact(id);
          return console.log(removeContact);
      default:
          return console.log("uknown action")
    }
}

invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9JHrssH" });
// invokeAction({ action: "add" , name: "sasha", email: "dsadasdsad", phone:"3124123431" })
// invokeAction({ action: "update", id: "hZjuaIB4XMm-QDtrbW5Uf" , name: "sasha1", email: "asdad", phone:"3124123431" })
// invokeAction({ action: "remove", id: "hZjuaIB4XMm-QDtrbW5Uf"})

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== - 1) {
//     const action = process.argv[actionIndex + 1];
//     invokeAction({action})
// }