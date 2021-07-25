const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

let phonebookEntries = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

app.get('/api/persons', (request, response) => {
    response.json(phonebookEntries);
});

app.get('/info', (request, response) => {
    const infoResponseObj = {
        numberOfPhonebookEntries: phonebookEntries.length,
        requestTimestamp: new Date().toUTCString()
    };


    const numberOfPhonebookEntries = '<p>Phonebook has info for ' + infoResponseObj.numberOfPhonebookEntries + (infoResponseObj.numberOfPhonebookEntries === 1 ? ' person' : ' people') + '</p>';
    const timestamp = '<p>' + infoResponseObj.requestTimestamp + '</p>';

    response.send('<div>' + numberOfPhonebookEntries + timestamp + '</div>');
});

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);

    const phoneBookEntry = phonebookEntries.find(entry => entry.id === id);

    if (!phoneBookEntry) {
        return response.status(404).end();
    }
    response.json(phoneBookEntry);
});

const generateUniqueId = (max) => {
    let id = Math.floor(Math.random() * max);

    while (phonebookEntries.find(entry => entry.id === id)) {
        id = Math.floor(Math.random() * max);
    }

    return id;
}

app.post('/api/persons', (request, response) => {
    const body = request.body;
    if (!body.name && !body.number) {
        return response.status(400).json({
            "error": 'The name or number is missing'
        })
    } else if (phonebookEntries.find(entry => entry.name.toLowerCase() === body.name.toLowerCase()) !== undefined) {
        return response.status(400).json({
            "error": 'The name already exists in the phonebook'
        })
    }

    const newPhonebookEntry = {
        name: body.name,
        number: body.number,
        id: generateUniqueId(100000)
    }

    phonebookEntries = phonebookEntries.concat(newPhonebookEntry);

    response.json(newPhonebookEntry);

});


app.listen(PORT, () => {
    console.log('Phonebook application listening on port ' + PORT);
})