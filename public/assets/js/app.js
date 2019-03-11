$(document).on("click", "#burgerSubmitButton", (event) => {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burgerTextField").val().trim(),
        devoured: 0
    }

    $.post("/api/burgers", newBurger).then(() => {
        window.location.reload();
    });
});

$(document).on("click", ".devourButton", (event) => {
    event.preventDefault();

    var id = $(".devourButton").attr("id");

    console.log("ID THAT IS LOGGED: " +  id);

    var devouredState = {
        devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
    }).then(() => {
        window.location.reload();
    });
});