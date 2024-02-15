var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Bundle  of Tree",image:"https://images.unsplash.com/photo-1694337596156-ffee96affe24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"pure beauty",image:"https://images.unsplash.com/photo-1544961371-516024f8e267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"},
    {name:"Taj Mahal", image:"https://images.unsplash.com/photo-1706191464658-8ce159c3166e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3MXxGem8zenVPSE42d3x8ZW58MHx8fHx8"},
    {name:"City of Dreams",image:"https://images.unsplash.com/photo-1705138059674-5d84f63e8000?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0NHxGem8zenVPSE42d3x8ZW58MHx8fHx8"},
{name:"Paris",image:"https://images.unsplash.com/photo-1690467573653-bbcee3517de7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2OXxGem8zenVPSE42d3x8ZW58MHx8fHx8"},
{name:"Glass of Sip",image:"https://images.unsplash.com/photo-1546171753-97d7676e4602?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D"},
{name:"race of life",image:"https://images.unsplash.com/photo-1562732401-e7768620c4c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D"},





]


function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();
showTheCards();

