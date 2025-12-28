# 🎵 Spotify Clone (React + Redux)

A fully functional **Spotify Clone** built using **React**, **Redux Toolkit**, and modern frontend tools.  
This project focuses on **music player logic, playlist management, liked songs, and smooth UI/UX** — similar to real Spotify behavior.

---

## 🚀 Features

### 🎶 Music Player
- Play / Pause songs
- Next & Previous track controls
- Seek bar with current time & duration
- Auto update progress while playing
- Audio state managed via Redux

### ❤️ Liked Songs
- Like / Unlike songs
- Liked songs stored in global Redux state
- Separate **Liked Songs Playlist**
- Instant UI update when liking a song

### 📂 Playlists
- Recent songs list
- Liked songs playlist
- Dynamic playlist rendering

### 🧠 State Management (Redux Toolkit)
- Centralized store for:
  - Songs data
  - Current playing song
  - Play/Pause state
  - Liked songs
- Clean slices (`songSlice`, `dataSlice`)
- No prop drilling

### 🧭 Routing (React Router)
- Home
- Liked Songs
- Playlist views
- Page-based navigation

### 📝 Forms (React Hook Form)
- Clean and controlled forms
- Easy validation
- Better performance than traditional forms

### 🎨 UI & UX
- Modern Spotify-like layout
- Smooth transitions
- Responsive design
- Icons from `react-icons` & `lucide-react`

---

## 🛠 Tech Stack

- **React (Vite)**
- **Redux Toolkit**
- **React Redux**
- **React Router DOM**
- **React Hook Form**
- **HTML5 Audio API**
- **Tailwind CSS**
- **Vercel (Deployment)**

---

## 📂 Project Structure

# 🎵 Spotify Clone (React + Redux)

A fully functional **Spotify Clone** built using **React**, **Redux Toolkit**, and modern frontend tools.  
This project focuses on **music player logic, playlist management, liked songs, and smooth UI/UX** — similar to real Spotify behavior.

---

## 🚀 Features

### 🎶 Music Player
- Play / Pause songs
- Next & Previous track controls
- Seek bar with current time & duration
- Auto update progress while playing
- Audio state managed via Redux

### ❤️ Liked Songs
- Like / Unlike songs
- Liked songs stored in global Redux state
- Separate **Liked Songs Playlist**
- Instant UI update when liking a song

### 📂 Playlists
- Recent songs list
- Liked songs playlist
- Dynamic playlist rendering

### 🧠 State Management (Redux Toolkit)
- Centralized store for:
  - Songs data
  - Current playing song
  - Play/Pause state
  - Liked songs
- Clean slices (`songSlice`, `dataSlice`)
- No prop drilling

### 🧭 Routing (React Router)
- Home
- Liked Songs
- Playlist views
- Page-based navigation

### 📝 Forms (React Hook Form)
- Clean and controlled forms
- Easy validation
- Better performance than traditional forms

### 🎨 UI & UX
- Modern Spotify-like layout
- Smooth transitions
- Responsive design
- Icons from `react-icons` & `lucide-react`

---

## 🛠 Tech Stack

- **React (Vite)**
- **Redux Toolkit**
- **React Redux**
- **React Router DOM**
- **React Hook Form**
- **HTML5 Audio API**
- **Tailwind CSS**
- **Vercel (Deployment)**

---

## 📂 Project Structure

src/
│
├── components/
│ ├── cards/
│ ├── layout/
│ └── player/
│
├── features/
│ ├── songSlice.js
│ └── dataSlice.js
│
├── pages/
│ ├── Home.jsx
│ ├── Liked.jsx
│ └── Playlist.jsx
│
├── store/
│ └── store.js
│
├── assets/
│ ├── images/
│ └── songs/
│
└── App.jsx