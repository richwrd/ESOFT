
document.getElementById("registrationForm")
        .addEventListener("submit", function(event) {
            event.preventDefault()//permite que a página nao seja atualizada a partir da requisição 
                    
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;

            //  create a new row with user information

            let tableRow = document.createElement("tr");
            let nameCell = document.createElement("td");
            let emailCell = document.createElement("td");
            
            
            nameCell.textContent = name
            emailCell.textContent = email

            tableRow.appendChild(nameCell)
            tableRow.appendChild(emailCell)

            // adiciona uma linha na tabela

            document.getElementById("tableID")
                .getElementsByTagName("tbody")[0].appendChild(tableRow)

            // resetar o formulario

            document.getElementById("registrationForm").reset()

    // console.log(document.body)

})//aciona uma função caso o evento é disparado

