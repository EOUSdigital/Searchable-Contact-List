//TODO 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 09.02 Array.filter Method - Challenge


//TODO 🧩 Step 6: Project Integration — Searchable Contact List

//* Scenario
//  You are building a Searchable Contact List for a small CRM (Customer Relationship Management) app.

//  You have the following contact data:

const contacts = [
    { name: 'Alice Johnson', phone: '555-1234' },
    { name: 'Bob Smith', phone: '555-5678' },
    { name: 'Charlie Brown', phone: '555-8765' },
    { name: 'David Williams', phone: '555-4321' }
];

//? Your Objective
//  Write a function searchContacts(contacts, query) that:
//  1. Uses filter() to return a new array of contacts whose names include the search query.
//  2. Makes the search case-insensitive (so "bob" matches "Bob Smith").
//  3. Logs the matching contacts to the console.

//? Example Output

//  JavaScript
searchContacts(contacts, 'bob');

//  CSS
[ { name: 'Bob Smith', phone: '555-5678' } ]

//! Solution

function searchContacts(contacts, query) {
    return contacts.filter(contact => 
        contact.name.toLowerCase().includes(query.toLowerCase())
    );
}

//// searchContacts(contacts, 'bob');
console.log(searchContacts(contacts, 'bob'));

//  ‼️ Feedback

//  ✅ Excellent — your solution is clean, correct, and handles **case-insensitive searching** perfectly.

//?  Why it works:
//  • `toLowerCase()` on both `contact.name` and `query` ensures case doesn’t matter.
//  • `.includes()` checks for the query as a substring inside the contact name.
//  • `filter()` collects only matching contacts into a new array.

//  Example output from your code:

```javascript
[ { name: 'Bob Smith', phone: '555-5678' } ]
```

//? 💡 Small improvement
//  You might want to also log the results directly when calling the function, like this:

```javascript
console.log(searchContacts(contacts, 'bob'));
```

//  That way you immediately see the matches when testing.
