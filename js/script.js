//    // City data - replace with your actual city data
//    const citiesData = [
//     {
//         id: 'tabriz',
//         name: 'Tabriz',
//         population: '1.6 million',
//         area: '237 km²',
//         x: 140, // Center x coordinate of the city on the SVG
//         y: 130  // Center y coordinate of the city on the SVG
//     },
//     {
//         id: 'tehran',
//         name: 'Tehran',
//         population: '8.7 million',
//         area: '730 km²',
//         x: 340,
//         y: 230
//     },
//     {
//         id: 'isfahan',
//         name: 'Isfahan',
//         population: '1.9 million',
//         area: '551 km²',
//         x: 240,
//         y: 330
//     }
// ];

// // Get the SVG element
// const svg = document.querySelector('svg');
// const infoBox = document.getElementById('info-box');
// const cityNameElement = document.getElementById('city-name');
// const cityPopulationElement = document.getElementById('city-population');
// const cityAreaElement = document.getElementById('city-area');

// // Add city markers
// citiesData.forEach(city => {

//     // Add event listeners for both paths and markers
//     const cityPath = document.getElementById(city.id);

//     // Helper function to handle hover
//     const handleHover = (event) => {
//         // Update info box content
//         cityNameElement.textContent = city.name;
//         cityPopulationElement.textContent = city.population;
//         cityAreaElement.textContent = city.area;

//         // Position the info box relative to mouse pointer
//         const mouseX = event.clientX;
//         const mouseY = event.clientY;

//         infoBox.style.left = `${mouseX + 15}px`;
//         infoBox.style.top = `${mouseY + 15}px`;
//         infoBox.style.opacity = '1';

//         // Change marker style
//         cityMarker.setAttribute('r', 8);
//         cityMarker.style.fill = '#3b82f6';
//     };

//     // Helper function to handle mouse out
//     const handleMouseOut = () => {
//         infoBox.style.opacity = '0';
//         cityMarker.setAttribute('r', 6);
//         cityMarker.style.fill = '#6b7280';
//     };

//     // Add events to path
//     if (cityPath) {
//         cityPath.addEventListener('mouseenter', handleHover);
//         cityPath.addEventListener('mousemove', handleHover);
//         cityPath.addEventListener('mouseleave', handleMouseOut);
//     }

//     // Add events to marker
//     cityMarker.addEventListener('mouseenter', handleHover);
//     cityMarker.addEventListener('mousemove', handleHover);
//     cityMarker.addEventListener('mouseleave', handleMouseOut);

//     // Add events to text label
//     cityText.addEventListener('mouseenter', handleHover);
//     cityText.addEventListener('mousemove', handleHover);
//     cityText.addEventListener('mouseleave', handleMouseOut);
// });

// for submit form
// Get modal elements
const modal = document.getElementById("reportModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelBtn = document.getElementById("cancelBtn");
const reportForm = document.getElementById("reportForm");

// Open modal function
function openModal() {
  modal.style.display = "flex";
}

// Close modal function
function closeModal() {
  modal.style.display = "none";
  reportForm.reset();
}

// Event listeners
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

// Close modal if clicked outside
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
