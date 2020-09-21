/*
Just draw a border round the document.body.
*/
setTimeout(() => {
    try {
    let elems = document.getElementsByClassName('GameWidget-Upcoming-BetButtons');
    for (let e of elems) {
        let begBtnGrp = document.createElement('div');
        begBtnGrp.classList.add('GameWidget-Button-Centered');
        begBtnGrp.classList.add('btn-group');
        begBtnGrp.setAttribute('role', 'group');

        let begBtn = document.createElement('button');
        begBtn.classList.add('GameWidget-Button');
        begBtn.classList.add('btn');
        begBtn.classList.add('btn-success');
        begBtn.innerHTML = 'Beg';
        begBtn.setAttribute('type', 'button');
        begBtn.onclick = () => {
            fetch("https://www.blaseball.com/api/logBeg", {
                credentials: 'include',
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
            })
            .then(e => e.json())
            .then(e => console.log(e), e => console.log(e));
        };

        begBtnGrp.appendChild(begBtn);

        e.appendChild(begBtnGrp);
    }
    } catch (err) { console.log(err) }
}, 1000);
