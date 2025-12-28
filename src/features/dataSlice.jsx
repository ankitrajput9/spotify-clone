import { createSlice } from "@reduxjs/toolkit";

const dataSlice =createSlice(
   {
     name:'data',
     initialState:{
        songs : [
  {
  id: 0,
  title: "Blue Eyes",
  artist: "Honey Singh",
  artistImg: "https://imgs.search.brave.com/5GLASWZnR5Ap7Svnmet7T5O3_kmb2ihN9nqeiy4wYYM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waG90/b3NmaWxlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/Mi9Zby1Zby1Ib25l/eS1TaW5naC00NS5q/cGVn",
  img: "./images/blueeyes.png",
  liked:false,
  songUrl: "./song/Blue Eyes.mp3",
},
{
  id: 1,
  liked:false,
  title: "Barbaad",
  artist: "Jubin Nautiyal",
  artistImg: "https://imgs.search.brave.com/8tX58Qn7y30mL3i_QPxZYa2rJhZjS_w68Q66Eiv7kcU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zb3Np/bWcuc2dwMS5jZG4u/ZGlnaXRhbG9jZWFu/c3BhY2VzLmNvbS9h/cnRpc3QtZ2FsbGVy/eS82MjAwMzMxXzE3/MDIwMzEwMzEud2Vi/cA",
  img: "./images/BarbaadImg.png",
  songUrl: "./song/Barbaad.mp3",
},
{
  id: 2,
  liked:false,
  title: "Saiyaara",
  artist: "Faheem Abdullah",
  artistImg: "https://imgs.search.brave.com/Qu7i4wZ9pXBvWOenRBxlA8zC0aevDkcQD-9f1RWJcuM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFPZ1hGUzdJQUwu/anBn",
  img: "./images/SaiyaaraImg.png",
  songUrl: "./song/Saiyaara.mp3",
},
{
  id: 3,
  liked:false,
  title: "Adat",
  artist: "Atif Aslam",
  artistImg: "https://imgs.search.brave.com/eaKxVuIN9waDW0-RunXEvZgqJBJvYq4yQ_e0gPVULx0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc3Lzgx/LzIxLzc3ODEyMTk5/NjVlOWRiNzNmNzUw/OGNjMTZiNjZiZTcy/LmpwZw",
  img: "./images/adat.png",
  songUrl: "./song/Aadat.mp3",
},
{
  id: 4,
  liked:false,
  title: "Admiring",
  artist: "Ikka & Karan Aujla",
  artistImg: "https://imgs.search.brave.com/nVzZTpSlgWh3Ob4Mgej6aQ7D33UCsHfznCgBE-Q5Qjw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4LzBm/LzAzLzM4MGYwMzMz/MGYyZDEyOTJjOWJl/MjViNDNmMmNjYzI1/LmpwZw",
  img: "./images/admiring.png",
  songUrl: "./song/Admiring.mp3",
},
{
  id: 5,
  liked:false,
  title: "Courtside",
  artist: "Karan Aujla",
  artistImg: "https://imgs.search.brave.com/4Z92-2ZWzJe79YVy-N-KLCVDODlM0rpvfI0zRoTKMF8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzQ4/ODU0Mi5qcGc",
  img: "./images/courtside.png",
  songUrl: "./song/Courtside.mp3",
},
{
  id: 6,
  title: "Dhun",
  liked:false,
  artist: "Ahaan Pandey",
  artistImg: "https://imgs.search.brave.com/rznZwHxD0TVOiWemiuM1-KTJFe59AdK3J7jfMTzg1m4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhdGljbWIuY29t/L21iY29udGVudC9p/bWFnZXMvY3JvcC91/cGxvYWRzLzIwMjUv/Ni9BaGFhbi1wYW5k/ZXktcGhvdG9zaG9v/dF8wXzEyMDAuanBn/LndlYnA",
  img: "./images/Dhun.png",
  songUrl: "./song/Dhun.mp3",
},
{
  id: 7,
  title: "Pehle Bhi",
  liked:false,
  artist: "Vishal Mishra",
  artistImg: "https://imgs.search.brave.com/t0RFbsMFoGMZUl4mwGawJVwLKdahYDMKicVceXslpiM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aG9uZXN0LXJldmll/dy1vbi12aXNoYWwt/bWlzaHJhLXYwLXc5/OTVzejd5bmE2ZjEu/anBlZz9hdXRvPXdl/YnAmcz04MzBjOTNk/ZWRhNmJkYjdmM2Fh/MjkyNGY4M2E3ZmYw/YjRhNDkxNGVm",
  img: "./images/Pehle.png",
  songUrl: "./song/PehleBhi.mp3",
},
{
  id: 8,
  title: "Ram Sia Ram",
  liked:false,
  artist: "Sachet Tandon",
  artistImg: "https://imgs.search.brave.com/HIWyTxaee_mGU6Auwh5gFo07cml3joFIRzm3YW6dbX0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNzE2/OTQ2OS5qcGc",
  img: "./images/RamSia.png",
  songUrl: "./song/Ramsia.mp3",
},
{
  id: 9,
  title: "Tum Hi Ho",
  liked:false,
  artist: "Arijit Singh",
  artistImg: "https://imgs.search.brave.com/FoH4J-iq7vYj3n92NAhlRJEzxTaizFc5iRLuS-aRX1o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS9h/cnRpc3RzL0FyaWpp/dF9TaW5naF8wMDRf/MjAyNDExMTgwNjM3/MTdfNTAweDUwMC5q/cGc",
  img: "./images/tumhiho.png",
  songUrl: "./song/TumhiHo.mp3",
},
{
  id: 10,
  title: "Wavy",
  liked:false,
  artist: "Karan Aujla",
  artistImg: "https://imgs.search.brave.com/nVzZTpSlgWh3Ob4Mgej6aQ7D33UCsHfznCgBE-Q5Qjw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4LzBm/LzAzLzM4MGYwMzMz/MGYyZDEyOTJjOWJl/MjViNDNmMmNjYzI1/LmpwZw",
  img: "./images/Wavy.png",
  songUrl: "./song/Wavy.mp3",
},
{
  id: 11,
  liked:false,
  title: "Winning Speech",
  artist: "MXRCI & Karan Aujla",
  artistImg: "https://imgs.search.brave.com/nVzZTpSlgWh3Ob4Mgej6aQ7D33UCsHfznCgBE-Q5Qjw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4LzBm/LzAzLzM4MGYwMzMz/MGYyZDEyOTJjOWJl/MjViNDNmMmNjYzI1/LmpwZw",
  img: "./images/Winning.png",
  songUrl: "./song/WinningSpeech.mp3",
},
{
  id: 12,
  liked:false,
  title: "Zaamana",
  artist: "Unknown",
  artistImg: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
  img: "./images/zamana.png",
  songUrl: "./song/Zaamana.mp3",
}

 
]

     },
     reducers:{
        setData:(state)=>{
        state.songs
        },
        toggleLike: (state, action) => {
  const song = state.songs.find(
    (song) => song.id === action.payload
  );

  if (song) {
    song.liked = !song.liked;
  }
}

     }
   })
   export const {setData,toggleLike}= dataSlice.actions;
   export default dataSlice.reducer;