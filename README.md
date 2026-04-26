# 🎨 Color Palette Generator

A simple JavaScript project that generates beautiful color palettes and allows users to copy color codes to the clipboard with a single click.

---

## 🚀 Features

* 🔄 Generate multiple color palettes
* 🎨 Display 5 colors per palette
* 📋 Copy color hex code to clipboard
* ✅ Visual feedback when color is copied
* 🔁 Cycle through predefined palettes

---

## 🧠 How It Works

* The app stores multiple palettes in an array.
* Each palette contains 5 color objects.
* When the page loads, the first palette is displayed.
* Clicking **"Generate"** shows the next palette.
* Clicking the **copy icon**:

  * Copies the color code
  * Replaces the icon with a checkmark

---

## 📂 Project Structure

```
project/
│
├── index.html
├── style.css
└── script.js
```

---

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript (Vanilla JS)
* Font Awesome (for icons)

---

## 📌 Key Concepts Used

* DOM Manipulation
* Event Delegation
* Array Iteration (`for`, `map`)
* Clipboard API (`navigator.clipboard.writeText`)
* Dynamic Element Creation (`createElement`)
* State-like behavior using variables

---

## ▶️ How to Run

1. Clone the repository:

   ```bash
   git clone <your-repo-link>
   ```

2. Open `index.html` in your browser

---

## 💡 Future Improvements

* Add random palette generation
* Add smooth transitions/animations
* Allow user to save favorite palettes
* Add copy success notification (toast)
* Improve UI/UX design

---

## 🧑‍💻 Author

Mohamed Moussa

---

## ⭐ Notes

This project is great for practicing:

* DOM manipulation
* Event handling
* Working with dynamic UI updates

---

Enjoy building and customizing your own color palettes 🎨✨
