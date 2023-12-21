const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users", {

            // Aula 418
            headers: {
                "content-type": "application/json",
                custom: "header",
            },
        }) // ate aqui
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
getData();

// aula 417
const container = document.querySelector("#user-container");
const printData = async () => {
    const data = await getData();
    console.log(data);

    data.forEach((user) => {
        const div = document.createElement("div")
        const nameElement = document.createElement("h2")
        nameElement.textContent = user.name;
        div.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        div.appendChild(emailElement);
        container.appendChild(div)
    });
};

printData()

// Aula 419

const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts", {
        body: JSON.stringify({
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1,
        }),
    });
});

// aula 420
