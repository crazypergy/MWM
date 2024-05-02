
    
    async function fetchSets() {
        try {
            const response = await fetch('SetList.json');
            if (!response.ok) {
                throw new Error('Failed to fetch sets data');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    // Function to search for a set by name and retrieve its code
    async function searchSet() {
        const searchInput = "Scars of Mirrodin";
        const setsData = await fetchSets();

        const foundSet = setsData.find(set => set.name.toLowerCase() === searchInput.toLowerCase());

        if (foundSet) {
            console.log(`Code for ${foundSet.name}: ${foundSet.code}`);
        } else {
            console.log(`No set found with the name '${searchInput}'`);
        }
    }

// document.addEventListener('DOMContentLoaded', async function () {
//     const form = document.getElementById('search-form');
//     form.addEventListener('submit', async function (event) {
//         event.preventDefault(); // Prevent form submission
//         const set = document.getElementById('set').value.trim();
//         const minPrice = parseFloat(document.getElementById('min-price').value.trim());

//         // Check if the set input field is empty
//         if (set === '') {
//             alert('Please enter a set name or code.');
//             return;
//         }

//         // Construct the URL for fetching all the cards from the set
//         const url = `https://api.scryfall.com/cards/search?q=${encodeURIComponent(set)}&include_prices=true`;

//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const { data } = await response.json();

//             // Sort cards by price in descending order
//             data.sort((a, b) => {
//                 const priceA = parseFloat(a.prices.usd) || 0;
//                 const priceB = parseFloat(b.prices.usd) || 0;
//                 return priceB - priceA;
//             });

//             // Open a new window to display card names and prices
//             const cardListWindow = window.open('', '_blank');
//             cardListWindow.document.write('<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Card List</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></head><body><div class="container"><h2>Card Names and Prices</h2><table class="table"><thead><tr><th scope="col">Card Name</th><th scope="col">Card Type</th><th scope="col">Price (USD)</th></tr></thead><tbody>');

//             data.forEach(card => {
//                 const name = card.name;
//                 const type = card.type_line;
//                 const price = parseFloat(card.prices.usd) || 0;
//                 if (price >= minPrice) {
//                     cardListWindow.document.write(`<tr><td>${name}</td><td>${type}</td><td>${price.toFixed(2)}</td></tr>`);
//                 }
//             });

//             cardListWindow.document.write('</tbody></table></div></body></html>');
//             cardListWindow.document.close();
//         } catch (error) {
//             console.error('Error fetching card list:', error.message); // Log the error message
//         }
//     });
// });
