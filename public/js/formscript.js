$("#reserveBtn").on("click",function(e){
    e.preventDefault();
    const resData = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val()
    }
    $.post("/api/tables",resData).then(result=>{
       window.location.href = '/tables';
    })
})

