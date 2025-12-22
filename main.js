let parent = document.getElementById("parent");
let output = document.getElementById("output");
let btn = document.getElementsByClassName("btn");

async function getData() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let usersData = await data.json();

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function () {
                let user = usersData[i]; 
                
                if (user) { 
                    output.innerHTML = `
                        <div>
                            <strong>ID:</strong> ${user.id} <br>
                            <strong>Name:</strong> ${user.name} <br>
                            <strong>Email:</strong> ${user.email} <br>
                            <strong>Address:</strong> <br>
                            - Street: ${user.address.street} <br>
                            - Suite: ${user.address.suite} <br>
                            - City: ${user.address.city} <br>
                            <strong>Phone:</strong> ${user.phone}<br>
                            <strong>Website:</strong> ${user.website}<br>
                        </div>
                    `;
                } else {

                    output.innerHTML = `"There is no data for this user, you are a good guy"<br><br>`;

                    let img = document.createElement("img");
                    // img.src = "./images/filem.jpg";
                    // img.style.width = "500px";   
                    // img.style.height = "500px";
                    img.style.display = "block";      
                    img.style.margin = "10px auto";    

                    output.appendChild(img);
                }
            });
        }

    } catch (error) {
        output.innerHTML = "حدث خطأ: " + error.message;
    }
}

getData();
