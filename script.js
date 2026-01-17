// ------------------ CONFIG ------------------ //
const ADMIN_PASSWORD = "111"; 
const venues = {
  "Central Library": { x: 40, y: 25 },
  "UMIT Block": { x: 45, y: 45 },
  "Auditorium": { x: 43, y: 65 },
  "Ground": { x: 25, y: 60 },
  "Pharmacy": { x: 75, y: 30 },
  "Polytechnic": { x: 30, y: 40 },
};

// Load saved events
let events = JSON.parse(localStorage.getItem("events")) || [];

const map = document.getElementById("map");
const modal = document.getElementById("eventModal");

// DOM Elements
const eventTitle = document.getElementById("eventTitle");
const eventDesc = document.getElementById("eventDesc");
const eventDateInput = document.getElementById("eventDate");
const eventVenue = document.getElementById("eventVenue");
const eventCategory = document.getElementById("eventCategory"); // NEW
const addEventBtn = document.getElementById("addEventBtn");

// Filters
const datePicker = document.getElementById("eventDatePicker");
const categorySelect = document.getElementById("categorySelect"); // NEW

// ------------------ FUNCTIONS ------------------ //

// Show modal
addEventBtn.onclick = () => {
  const pass = prompt("Enter admin password");
  if (pass === ADMIN_PASSWORD) {
    modal.style.display = "block";
  } else {
    alert("Incorrect password");
  }
};

// Close modal
window.closeModal = function() { // Made global so HTML onclick works
  modal.style.display = "none";
  eventTitle.value = "";
  eventDesc.value = "";
  eventDateInput.value = "";
  eventVenue.value = "";
}

// Save event
window.saveEvent = function() { // Made global
  const title = eventTitle.value.trim();
  const desc = eventDesc.value.trim();
  const date = eventDateInput.value;
  const venue = eventVenue.value;
  const category = eventCategory.value; // Get category

  if (!title || !desc || !date || !venue) {
    alert("Please fill all fields");
    return;
  }

  // Save category in the object
  const newEvent = { title, desc, date, venue, category };
  events.push(newEvent);
  localStorage.setItem("events", JSON.stringify(events));

  closeModal();

  // Refresh map if the date matches
  if (datePicker.value === date) {
    renderEvents();
  }
}

// Render pins based on Date AND Category
function renderEvents() {
  const selectedDate = datePicker.value;
  const selectedCategory = categorySelect.value;

  // Remove existing pins
  document.querySelectorAll(".pin").forEach(p => p.remove());

  // Filter events
  const filteredEvents = events.filter(e => {
    const dateMatch = (e.date === selectedDate);
    const catMatch = (selectedCategory === "all" || e.category === selectedCategory);
    return dateMatch && catMatch;
  });

  filteredEvents.forEach(renderEventPin);
}

// Render a single pin
function renderEventPin(event) {
  const pos = venues[event.venue];
  if (!pos) return;

  const pin = document.createElement("div");
  // Add specific category class for CSS coloring
  pin.className = `pin ${event.category}`; 
  pin.style.left = pos.x + "%";
  pin.style.top = pos.y + "%";

  pin.onclick = () => {
    alert(`${event.title} (${event.category})\n${event.desc}\nVenue: ${event.venue}`);
  };

  map.appendChild(pin);
}

// Event Listeners for Filters
datePicker.addEventListener("input", renderEvents);
categorySelect.addEventListener("change", renderEvents);

// Initialize
if (datePicker.value) renderEvents();