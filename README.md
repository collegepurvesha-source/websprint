# websprint
PS 2: Campus Event Discovery Platform
# Campus Event Map

## 📌 Project Overview

The **Campus Event Map** is a simple static web application built using **HTML, CSS, and basic JavaScript**. It displays a **campus floor plan** and allows events to be marked on specific venues using **clickable pins**.

The project is designed to be lightweight, beginner‑friendly, and completely client‑side (no backend required).

---

## 🎯 Key Features

* 🗺️ Static campus map (floor plan image)
* 📍 Event pins displayed at predefined venue locations
* 📅 Pins appear **only on their respective event dates**
* 🖱️ Clickable pins showing event details
* ➕ Admin‑only event creation (password protected)
* 💾 Events persist using **localStorage** (survive page refresh)
* 🎨 Easily customizable background and styles

---

## 🏗️ How It Works

### Venues

* Venues are defined manually
* Each venue has a fixed position (`x`, `y`) on the map
* Venue names in **HTML and JavaScript must match exactly**

### Events

* Events include:

  * Title
  * Date
  * Venue
* When an event is added:

  * It is saved in `localStorage`
  * A pin appears on the map **only on the selected date**

---

## 📁 Project Structure

```
campus-event-map/
│
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # Event logic & pin handling
└── campus-map.png  # Campus floor plan image
```

---

## 🛠️ Customization Guide

### ➕ Add a New Venue

1. Add venue name in **HTML** dropdown
2. Add its position in **JavaScript**:

```js
"New Venue": { x: 52.5, y: 41.8 }
```

> Coordinates are percentages relative to the map container.

---

### 🎨 Change Website Background Color

Edit `style.css`:

```css
body {
  background-color: #f0f0f0;
}
```

---

## 🔐 Admin Access

* Adding events requires a password
* Password is stored directly in JavaScript

```js
const ADMIN_PASSWORD = "1234";
```

> ⚠️ This is for learning/demo purposes only (not secure for production).

---

## 🌐 How to Run the Project

### Recommended (Local Server)

Using VS Code:

* Install **Live Server**
* Right‑click `index.html` → *Open with Live Server*



---

## 🚀 Future Improvements (Optional)

* Drag‑and‑drop pin placement
* Venue management panel
* Event descriptions popup
* Mobile responsiveness
* Image‑based labels

---

## 📚 Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript
* Browser LocalStorage

---

## ✅ Intended Use

This project is ideal for:

* College campuses
* Event planning demos
* JavaScript beginners
* Static UI prototyping

---

**Author:** Yasaswi, Purvesha

**Status:** Learning / Prototype Project
