fetch (`http://localhost:3000/films`)
    .then (function (response) {
        return response.json();
    })
    
.then(function(data){
    const theatre =document.querySelector('.details');
    data.forEach(function(movie) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML =`
        <img src="${movie.poster}" alt="movie Image" style="width:60%; height:60%">
        <div class="container">
        <h5><b>${movie.name}</b></h5>
        <p>${movie.runtime}</p>
        <p>${movie.capacity}</p>
        <p>${movie.description}</p>
        <p>${movie.showtime}</p>
        <p>${movie.tickets_sold}</p>
        <p>${movie.description}</p>
        <div class="card-actions">
            <button class="Buy-ticket" style="background-color: #9FE2BF; color: green; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">Buy Ticket</button>
          </div>
        
        `;
        theatre.appendChild(card);
        
    });

})