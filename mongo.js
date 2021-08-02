const mongoose = require("mongoose");

if (process.argv.length < 3) {
    console.log("Please add the password parameter: node mongo.js <password>");
    process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstackopen:${password}@cluster0.qhcvm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

const phoneBookEntrySchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String
});

const PhonebookEntry = mongoose.model('Phonebook Entry', phoneBookEntrySchema);

if (process.argv.length === 3) {

    PhonebookEntry.find({}).then(result => {
        result.forEach(phonebookEntry => {
            console.log(`${phonebookEntry.name} ${phonebookEntry.number}`);
        });
        mongoose.connection.close();
    })
} else if (process.argv.length === 5) {
    
    const phonebookEntry = new PhonebookEntry({
        name: process.argv[3],
        number: process.argv[4]
    })

    phonebookEntry.save().then(result => {
        console.log(`added ${phonebookEntry.name} number ${phonebookEntry.number} to phonebook`);
        mongoose.connection.close();
    })

} else {
    console.log("invalid args");
}
