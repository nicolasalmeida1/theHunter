export function addHunter(db){
    const register = document.createElement('tr');
    register.classList.add('tbody-local');

    const registerBody = `<tr>
    <td>${db.hunter}</td>
    <td>${db.animal}</td>
    <td>${db.distance}</td>
    <td>${db.date}</td>
</tr>`;

    register.innerHTML = registerBody;
    document.querySelector(".tbody-local").appendChild(register);
}

export function showHunter(db){
    db.forEach(element => {
        addHunter(element);
    });
}