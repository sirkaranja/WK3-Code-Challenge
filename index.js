const filmList = document.querySelector('#movielist');

// Fetch the movie data
fetch("http://localhost:3000/films")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach(function (movie) {
      const listItem = document.createElement('li');
      listItem.classList.add('film', 'item');
      listItem.textContent = movie.title;
      filmList.appendChild(listItem);
    });
    const characters = document.querySelector('.moviedetails');
    data.forEach(function (movie) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="container">
          <img src="${movie.poster}" alt="Product Image" style="width:50%; height:50%">
          <h1><b>${movie.title}</b></h1>
          <p>Runtime: ${movie.runtime}</p>
          <p>Showtime: ${movie.showtime}</p>
          <p>Available Tickets: <span class="available-tickets">${movie.capacity - movie.tickets_sold}</span></p>
          <button class="buy-ticket">Buy Ticket</button>
        </div>
      `;
      characters.appendChild(card);
//event for buying tickets
      const buyButton = card.querySelector('.buy-ticket');
      buyButton.addEventListener('click', function(event) {
        const availableTickets = card.querySelector('.available-tickets');
        const numAvailableTickets = parseInt(availableTickets.textContent);
        if (numAvailableTickets > 0) {
//updates tickets
          availableTickets.textContent = numAvailableTickets - 1;
          const newTicketsSold = movie.tickets_sold + 1;
          fetch(`http://localhost:3000/films/${movie.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tickets_sold: newTicketsSold })
          })
        } 
          alert('Total Sold Out');
      });
    });
  })
  
