const gamesData = [
    {
      id: 1,
      name: "Doodle Jump",
      gameimg: "https://ik.imagekit.io/lah6sw8ky/H5_img/doodle_jump.png?updatedAt=1732464153953",
      gamelocation: "https://h5-doodle-jump.blogspot.com"
    },
    {
      id: 2,
      name: "2048",
      gameimg: "https://ik.imagekit.io/lah6sw8ky/H5_img/2048_hero.png?updatedAt=1735316488227",
      gamelocation: "games/2048-master/index.html"
    },
    {
      id: 3,
      name: "Shooting",
      gameimg: "https://ik.imagekit.io/lah6sw8ky/H5_games/Shooting/shooting.png?updatedAt=1733850918085",
      gamelocation: "games/shooting/index.html"
    },
    {
      id: 4,
      name: "ADS"
    },
    {
      id: 5,
      name: "space invaders",
      gameimg: "https://ik.imagekit.io/lah6sw8ky/H5_img/spaceinvaders_hero.jpg?updatedAt=1735317137036",
      gamelocation: "games/space-invaders-master/index.html"
    },
    {
      id: 6,
      name: "snake",
      gameimg: "https://ik.imagekit.io/lah6sw8ky/H5_img/snake_hero.png?updatedAt=1735319994152",
      gamelocation: "games/snake-master/index.html"
    },
    {
      id: 7,
      name: "memory card",
      gameimg: "https://ik.imagekit.io/lah6sw8ky/H5_img/memory_card_hero.jpeg?updatedAt=1735320095099",
      gamelocation: "games/memory-card-master/index.html"
    },
    {
      id: 8,
      name: "ADS",
    },
  
  ];
  
  
  
  let games = "";
  
  gamesData.map((elem, idx) => {
   if(elem.id%4 == 0){
  games += `<div class=" h-[15vh] relative flex justify-center items-center w-[50vh] rounded-lg bg-[#faf5ed]">
    <h1>Ad</h1>
  </div> `;
   }else{
    games += ` 
    <a href="${elem.gamelocation}" target="_blank" >
    <div id="${idx}" class=" h-[15vh] bg-[url('${elem.gameimg}')] bg-cover bg-center relative w-[50vh] rounded-lg bg-[#faf5ed]">
    <div class=" absolute text-[#333] bottom-0 flex flex-col justify-between items-start py-7 gap-2 px-6">
       
    </div>
  </div>
  </a>
   `;
           
   }
  });
  
  const gamesBox = document.getElementById("gameCard");
  gamesBox.innerHTML = games;