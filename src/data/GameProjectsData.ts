import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData(
        "project-1",
        "Escape Of the Doodis",
        "img/projects/Doodis/Cover.mp4", "video",

        `
        <div class="paragraph">
        <strong>Escape Of the Doodis</strong> is a group project I worked on during my 4th semester at IAC. The goal of this semester was to take a game from the 90s or 2000s and reimagine it for the modern era.  
        <br />We chose to remake the classic <a href="https://playclassic.games/games/puzzle-solving-dos-games-online/play-lemmings-online/play/" target="_blank">Lemmings</a> due to its simple yet engaging mechanics, which offered a perfect foundation for innovative updates.
      </div>
      
      <div class="paragraph">
        In our reimagining, we brought the game into a 3D environment, introducing exciting new gameplay elements:
        <ul>
          <li>Dynamic placement of world objects to command the "Doodis" (our reinterpretation of the Lemmings).</li>
          <li>Assigning jobs to the Doodis via placed objects, such as a parachute table, to automate repetitive tasks.</li>
          <li>Making the gameplay more intuitive and engaging by reducing frustration through automation.</li>
        </ul>
      </div>
      
      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/xri35dFhvF4?si=bYJSGnVPzaK_nUA7" frameborder="0" allowfullscreen></iframe>
      </div>
      
      <div class="paragraph center">
        <a href="https://spud-man.itch.io/escape-of-the-doodis" target="_blank">
          <img src="img/Itch-Badge-Color.svg" alt="itch badge" style="width: 75%; height: auto;" />
        </a>
      </div>
      
      <div class="paragraph">
        My key responsibilities in this project included:
      
        <div class="content-wrapper">
          <div class="text-box">
            <h2>Customization System</h2>
            <p>
              Developed a comprehensive <strong>Customization System</strong> that allows players to personalize their gameplay experience. Players can customize various aspects, including clothing colors, accessories, and more.
            </p>
          </div>
          <div class="video-box">
            <video controls width="300" autoplay loop muted playsinline>
              <source src="img/projects/Doodis/Customization Screen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      
        <div class="divider"></div>

        <div class="content-wrapper-flipped">
          <div class="text-box">
            <h2>Game Save System</h2>
            Implemented an efficient <strong>JSON-Based Save System</strong> to capture and store player progress.  <br>
            This system ensures smooth saving and loading of game states, even with complex customizations.  <br>
            Additionally, I created a custom serializable Dictionary solution to easily save various data type pairs.  <br>
            Here is an example of the JSON structure used in the customization system:  <br>
          </div>
          
          <pre class = "code-snippet json">
{
"defaultClothing": {
    "hatPrefabName": "Cowboy Hat",
    "backpackPrefabName": "",
    "clothingColor": {
    "x": 0.9254902005195618,
    "y": 0.3137255012989044,
    "z": 0.250980406999588
    },
    "skinColor": {
    "x": 0.14677810668945313,
    "y": 0.8188678622245789,
    "z": 0.8067854046821594
    }
},
"customColors": {
    "keys": [
    3,
    2
    ],
    "values": [
    {
        "name": "Custom",
        "color": {
        "r": 0.3310408592224121,
        "g": 0.5121078491210938,
        "b": 0.10687584429979325,
        "a": 1.0
        }
    },
    {
        "name": "Custom",
        "color": {
        "r": 0.35260525345802309,
        "g": 0.404331237077713,
        "b": 1.0,
        "a": 1.0
        }
    }
    ]
}
}
    </pre>
        </div>
        <div class="divider"></div>
        <div class="content-wrapper">
          <div class="text-box">
            <h2>Grid & Placement System</h2>
            Designed and implemented a robust <strong>Grid and Placement System</strong> to facilitate world object placement. This system allows players to create intricate setups that enhance strategy and gameplay.
          </div>
      
          <div class="video-box">
            <video controls width="300" autoplay loop muted playsinline>
              <source src="img/projects/Doodis/PlacementSystem.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="divider"></div>
        <div class="content-wrapper-flipped">
          <div class="text-box">
          <h2>GUI Design</h2>
            Designed and developed essential <strong>UI/GUI systems</strong>, including:
            <ul>
              <li>Main menu</li>
              <li>Player customization screen</li>
              <li>Level selector</li>
              <li>In-game interface</li>
            </ul>
            These interfaces were carefully integrated with gameplay mechanics to provide an intuitive and seamless user experience. For example, the level selector provides quick navigation while maintaining immersion.
          </div>
          <div class="video-box">
            <video controls width="300" autoplay loop muted playsinline>
              <source src="img/projects/Doodis/GUI.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="content-wrapper">
        <div class="video-box">
          <video controls width="300" autoplay loop muted playsinline>
            <source src="img/projects/Doodis/Doodis-Gameplay.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      
        <div class="video-box">
          <video controls width="300" autoplay loop muted playsinline>
            <source src="img/projects/Doodis/Doodis-Gamplay2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      <div class="paragraph">
        This game was a collaborative effort, with my teammates contributing in various areas, including character gameplay, environment art, lighting, level design, and effects.  
        <br />You can explore our individual contributions here:
        <ul>
          <li><a href="https://www.artstation.com/artwork/Dvgdyy" target="_blank">Aviv Hauyn (Me) - Mechanics, World Gameplay & UI</a></li>
          <li><a href="https://www.artstation.com/artwork/QXAR44" target="_blank">Alex Shevchenko - Effects and Character Gameplay</a></li>
          <li><a href="https://www.artstation.com/artwork/39KV2Y" target="_blank">Illay Aloni - Environment Art, Sound, Lighting & Level Design</a></li>
          <li><a href="https://www.artstation.com/artwork/04PdN5" target="_blank">Nadav Eisman - Modeling and Environment Art</a></li>
        </ul>
      </div>      
        `,
        "#F69223",
        false,
        true
    )
    ,
    new ProjectData("project-2", "Skolger", "img/projects/Skolger/Cover.png", "image",
        `
    <div class="paragraph">
    <strong>Skolger</strong> is a project I worked on during my final semester at IAC. This Viking-inspired colony management game features intricate systems that create a deeply engaging experience, despite challenges faced during development.
  </div>
  
  <div class="paragraph">
    The game showcases several key features:
    <ul>
      <li>A <strong>Dynamic Selection System</strong> that allows players to easily manage and interact with colonists and objects in the game world.</li>
      <li>A <strong>Custom Terrain Building Tool</strong>, enabling players to construct and reshape the game environment dynamically.</li>
      <li>A <strong>Dynamic Tutorial System</strong> designed to guide players through gameplay in an adaptive and interactive way.</li>
      <li>A <strong>Grid-Based Building System</strong> that allows players to design and build custom homes and structures for their colony.</li>
      <li>Colonist world interaction systems, including <strong>harvesting, constructing, and hauling</strong>, bringing the colony to life.</li>
      <li>A <strong>Behavior Tree-Based AI</strong> structure, which I extended to support dynamic colonist behaviors based on their environment and needs.</li>
    </ul>
  </div>
  
  <div class="paragraph center">
    <a href="https://spud-man.itch.io/skolger" target="_blank">
      <img src="img/Itch-Badge-Color.svg" alt="itch badge" style="width: 75%; height: auto;" />
    </a>
  </div>
  
  <div class="paragraph">
    My key responsibilities in this project included:
  
    <div class="content-wrapper">
      <div class="text-box">
        <h2>Dynamic Selection System</h2>
        <p>
          Developed a <strong>Dynamic Selection System</strong> that enables players to easily select and manage colonists, objects, and structures, streamlining gameplay interaction.
        </p>
      </div>
      <div class="video-box">
        <video controls width="300" autoplay loop muted playsinline>
          <source src="img/projects/Skolger/Selection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  
    <div class="divider"></div>

    <div class="content-wrapper-flipped">
    <div class="text-box">
    <h2>Custom Terrain Tool</h2>
    <p>
    Developed a <strong>Custom Terrain Building Tool</strong> composed of five key functionalities: sculpting, painting, distributing foliage & items, and constructing buildings.  <br>
    The sculpting and painting components operate by modifying values within a grid, which are then utilized to dynamically generate an optimized mesh. This mesh minimizes vertex count by generating faces only where necessary, ensuring maximum efficiency.<br>  
    The tool includes full undo support, allowing users to easily revert changes and iterate on terrain designs seamlessly.  <br>
    The mesh generation process was further refined using advanced optimization techniques, enabling the system to handle generating large terrains nearly seamlessly and performantly.<br>
  </p>
  
  </div>
  
      <div class="video-box-vertical">
        <video controls width="300" autoplay loop muted playsinline>
          <source src="img/projects/Skolger/Tool-part-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls width="300" autoplay loop muted playsinline>
          <source src="img/projects/Skolger/Tool-part-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="divider"></div>
    
    <div class="content-wrapper">
    <div class="text-box">
        <h2>Dynamic Tutorial System</h2>
        <p>
            Created a <router-link to="/tech-and-tools/dynamic-tutorial-system"><strong>Dynamic Tutorial System</strong></router-link> to guide players through gameplay, adapting to their actions and progress.  
            Designed with <strong>SOLID principles</strong>, it enables game designers to easily modify, extend, and implement tutorials in any game.
        </p>
    </div>

  
      <div class="video-box">
        <video controls width="300" autoplay loop muted playsinline>
          <source src="img/projects/Skolger/TutorialSystem.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="divider"></div>
  
    <div class="content-wrapper-flipped">
    <div class="text-box">
      <h2>Colonist World Interaction Framework</h2>
      <p>
        Designed and implemented the <strong>framework</strong> that enables colonists to dynamically interact with the game world.  
        This framework supports a variety of colonist actions, including:
        <ul>
          <li>Collecting items and adding them to stockpiles.</li>
          <li>Managing colony tasks, such as chopping down trees and gathering resources.</li>
          <li>Constructing buildings and performing other essential colony actions.</li>
        </ul>
        Built entirely from scratch, this framework ensures seamless integration with other game systems, enabling a responsive and immersive colony simulation.
      </p>
    </div>
    <div class="video-box-vertical">
      <video controls width="300" autoplay loop muted playsinline>
        <source src="img/projects/Skolger/Hauling.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video controls width="300" autoplay loop muted playsinline>
        <source src="img/projects/Skolger/Harvesting.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video controls width="300" autoplay loop muted playsinline>
        <source src="img/projects/Skolger/Building.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  
  <div class="divider"></div>
  
    <div class="content-wrapper">
      <div class="text-box">
        <h2>Behavior Behavior Tree Based AI</h2>
        <p>
          Designed and extended a <strong>Behavior Tree-Based AI</strong> structure to govern colonist actions dynamically.  
          This system dynamically responds to evolving needs and player choices, fostering emergent gameplay and enabling strategic, player-driven interactions.
        </p>
      </div>
      <div class="video-box">
      <img src="img/projects/Skolger/Brain.drawio.svg" alt="Colonist brain diagram" style="width: 100%; height: auto;" />
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <div class="content-wrapper-flipped">
  <div class="text-box">
  <h2>Building System</h2>
    Designed and implemented a <strong>Grid-Based Building System</strong> that provides players the freedom to design custom homes and colony structures, enhancing creativity and strategic gameplay.
  </div>
  <div class="video-box">
    <video controls width="300" autoplay loop muted playsinline>
      <source src="img/projects/Skolger/Building.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<div class="divider"></div>

<div class="content-wrapper">
<div class="text-box">
  <h2>Visibility Shader</h2>
  <p>
    Developed a custom shader that hides everything below a specified threshold, except for key elements like colonists, ensuring players can always see essential gameplay details within buildings.
  </p>
</div>
<div class="video-box">
  <video controls width="300" autoplay loop muted playsinline>
    <source src="img/projects/Skolger/Shader.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
</div>
  
  
                            `, "#0c6654", true, true),
    new ProjectData("project-3", "Alien Annihilation Village Editon",
        "img/projects/AlienAnnihilationVE/Cover.mp4", "video",
        `
    <div class="paragraph">
    <strong>Alien Annihilation VE</strong> is a solo project I developed during my second semester at IAC. In this game, players take on the role of an invading alien tasked with destroying everything in their path.  
    <br />As the sole developer, I designed and implemented all aspects of the game, creating an action-packed experience with engaging mechanics and dynamic gameplay.
  </div>
  
  <div class="paragraph">
    Key features of the game include:
    <ul>
      <li><strong>Shop System:</strong> Upgrade your ship with enhanced capabilities to wreak even more havoc.</li>
      <li><strong>Weapons:</strong> Equip guns and a powerful rocket launcher to obliterate enemies and structures.</li>
      <li><strong>Traction Beam:</strong> Pick up and manipulate objects and enemies, adding a strategic layer to gameplay.</li>
      <li><strong>Building Destruction:</strong> Bring buildings crumbling down to ensure no structure is left standing.</li>
      <li><strong>Enemy Units:</strong> Battle medieval defenses, including catapults and ballistas, for a unique clash of technologies.</li>
    </ul>
  </div>
  
  <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube.com/embed/8VzpcWd5S28?si=wpwQzudIPSpiE7aa" frameborder="0" allowfullscreen></iframe>
  </div>
  
  <div class="paragraph center">
    <a href="https://spud-man.itch.io/alienannihilationve" target="_blank">
      <img src="img/Itch-Badge-Color.svg" alt="itch badge" style="width: 75%; height: auto;" />
    </a>
  </div>
  
  <div class="paragraph">
    My key responsibilities in this project included:
    
    <div class="content-wrapper">
      <div class="text-box">
        <h2>Shop System</h2>
        <p>
          Designed and implemented a <strong>Shop System</strong> that allows players to repair & upgrade their ship buy new weapons, enhanced abilities, and increased survivability.
        </p>
      </div>
      <div class="video-box">
        <video width="300" autoplay loop muted playsinline>
          <source src="img/projects/AlienAnnihilationVE/Shop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="divider"></div>
  
    <div class="content-wrapper-flipped">
      <div class="text-box">
        <h2>Weapons</h2>
        <p>
            Equipped the player’s ship with <strong>guns</strong>, upgradeable with explosive bullets, and a <strong>rocket launcher</strong>, delivering devastating firepower for combat and destruction.
        </p>

      </div>
      <div class="video-box">
        <video width="300" autoplay loop muted playsinline>
          <source src="img/projects/AlienAnnihilationVE/Guns.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="divider"></div>
  
    <div class="content-wrapper">
      <div class="text-box">
        <h2>Traction Beam</h2>
        <p>
            Designed and implemented a <strong>Traction Beam</strong> mechanic, enabling players to pick up objects and enemies and launch them across the map or at other enemies. This feature adds both strategic depth and humor to the gameplay experience.
        </p>
      </div>
      <div class="video-box">
        <video width="300" autoplay loop muted playsinline>
          <source src="img/projects/AlienAnnihilationVE/TractionBeam.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="divider"></div>
  
    <div class="content-wrapper-flipped">
      <div class="text-box">
        <h2>Building Destruction</h2>
        <p>
          Implemented a <strong>Building Destruction</strong> system, allowing players to obliterate structures dynamically and leave no trace behind.
        </p>
      </div>
      <div class="video-box">
        <video width="300" autoplay loop muted playsinline>
          <source src="img/projects/AlienAnnihilationVE/BuildingDestruction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="divider"></div>
  
    <div class="content-wrapper">
      <div class="text-box">
        <h2>Enemy Units</h2>
        <p>
            Designed and implemented <strong>enemy units</strong>, including catapults that launch both giant rocks and explosives, as well as ballistas, creating a unique clash between medieval defenses and alien technology.
        </p>

      </div>
      <div class="video-box">
        <video width="300" autoplay loop muted playsinline>
          <source src="img/projects/AlienAnnihilationVE/Enemies.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>

  <div class="divider"></div>
  
  <div class="content-wrapper">
  
    <div class="video-box">
    <img src="img/projects/AlienAnnihilationVE/Image1.jpg" alt="Colonist brain diagram" style="width: 100%; height: auto;" />
    </div>
    <div class="video-box">
    <img src="img/projects/AlienAnnihilationVE/Image2.jpg" alt="Colonist brain diagram" style="width: 100%; height: auto;" />
    </div>
     
  </div>
  
                            `, "#1dde8d", false, true),
];