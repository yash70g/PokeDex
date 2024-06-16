async function getdata(pokename) {
            const response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`))
                }, 1500);
            })
            const data = await response.json();

            const front = data.sprites.front_default;
            const back = data.sprites.back_default;
            const name = data.name;
            const types = data.types.map(type => type.type.name).join(', ');

            const dataDiv = document.createElement('div');
            dataDiv.classList.add('data');
            dataDiv.innerHTML += `
        <img id="front" src="${front}" alt="">
        <img id="back" src="${back}" alt="">
        <table>
            <caption>Pokemon Details</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${name}</td>
                    <td>${data.id}</td>
                    <td>${types}</td>
                </tr>
            </tbody>
        </table>
    `;

            const container = document.querySelector('body');
            container.appendChild(dataDiv);
        }
