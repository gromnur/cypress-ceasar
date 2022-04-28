let email = ['stephane.lanier.a@xyz.com', 'john.doe.b_c@xyz.com'];

function makePersons(email){
    const array = email.map((person) => {
        const personEmail = person.split('@')[0].split('.');
        return {
            email: person,
            firstname: personEmail[0],
            lastname: personEmail[1],
            departments: personEmail[2].toUpperCase().split('_')
        }
    });
    return array;
}

console.log(makePersons(email));