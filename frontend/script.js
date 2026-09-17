const API_URL = "http://localhost:5242/api/eszkozok";

const eszkozokLekerdezese = () => {

    fetch(API_URL)
        .then(response => response.json())
        .then(adatok => {

            const tabla = document.getElementById('#eszkozTable')
            tabla.innerHTML = "";

            adatok.forEach(eszkoz => {

                eszkoz.innerHTML += `
                    <tr>
                        <td>${eszkoz.id}</td>                    
                        <td>${eszkoz.nev}</td>                    
                        <td>${eszkoz.leltariSzam}</td>                    
                        <td>${eszkoz.kategoria}</td>                    
                        <td>${eszkoz.gyarto}</td>                    
                        <td>${eszkoz.terem}</td>                    
                        <td>${eszkoz.allapot}</td>                    
                    </tr>


             `;

            });
        })
        .catch(error => {
            console.log(error)

            document.getElementById("uzenet").innerHTML = 
                '<div class="alert alert-danger">Nem sikerült csatlakozni</div>'
        });


};

document.getElementById("lekerdezesGomb")
    .addEventListener("click", eszkozokLekerdezese);
