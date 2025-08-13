# 📕 Module 06 - Loops, Iteration and High Order Array Methods - Lesson 09.02 Array.filter Method — Searchable Contact List

## 📖 Scenario
You are building a **Searchable Contact List** for a CRM (Customer Relationship Management) app.

You have the following contact data:
```javascript
const contacts = [
  { name: 'Alice Johnson', phone: '555-1234' },
  { name: 'Bob Smith', phone: '555-5678' },
  { name: 'Charlie Brown', phone: '555-8765' },
  { name: 'David Williams', phone: '555-4321' }
];
```

---

## 🎯 Objective
Write a function `searchContacts(contacts, query)` that:
1. Uses `filter()` to return a new array of contacts whose names **include** the search query.
2. Makes the search **case-insensitive** (so `"bob"` matches `"Bob Smith"`).
3. Logs the matching contacts to the console.

---

## 🧮 Solution
```javascript
function searchContacts(contacts, query) {
    return contacts.filter(contact => 
        contact.name.toLowerCase().includes(query.toLowerCase())
    );
}

// Example usage
console.log(searchContacts(contacts, 'bob'));
```
---

## 📝 Expected Output
```
[ { name: 'Bob Smith', phone: '555-5678' } ]
```

---

## 💡 Key Points Learned
- `filter()` is ideal for creating **subsets** of data from a larger array.
- Converting both the source string and the query to lowercase ensures **case-insensitive matching**.
- `.includes()` is a simple way to check for substring matches within strings.
