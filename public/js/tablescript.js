$.get("/api/tables").then(data=>{
    data.forEach(table=>{
        const newCard = $("<div>")
        newCard.addClass("card");
        newCard.html(`<h4>Name: ${table.name}</h4><p>Phone: ${table.phone}</p></h4><p>Email: ${table.email}</p>`)
        $("#reservedTables").append(newCard);
    })
})
$.get("/api/waitlist").then(data=>{
    data.forEach(table=>{
        const newCard = $("<div>")
        newCard.addClass("card");
        newCard.html(`<h4>Name: ${table.name}</h4><p>Contact: ${table.phone}</p></h4><p>Email: ${table.email}</p>`)
        $("#waitlist").append(newCard);
    })
})