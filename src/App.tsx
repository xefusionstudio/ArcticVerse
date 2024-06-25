import './App.css'
import './anmbdr.css'
function App() {
  return (
    <>
    {/* <img id="AVlogo" src="/public/ArcticVerse.png"
     alt="ArcticVerse.png"/> */}
     {/* https://via.placeholder.com/45 */}
    <div id='AVlogo'>
    <img src="/public/ArcticWO.png" alt="ArcticVerse.png" width={"120px"}/>
    </div>

    <div id="social">
      <p id="SP">Our social links:</p>

      <section id="DC" className='Socialblock'><a href="https://discord.gg/zXSqhHSMst"><img src="/public/DC.png" alt="discord.png" width={"25px"}/> Discord </a></section>

      <section id="IG" className='Socialblock'><a href="https://www.instagram.com/arctic_verse?igsh=cHQzMnR3NWp6d2pu"><img src="/public/IG.png" alt="Instagram.png" width={"25px"}/> Instagram </a></section>
    </div>
    
    <h2 id="h2-1">Welcome to:</h2>
    <h1 id="Head">Arctic Verse</h1>

    <div className='card'>
      <h3>...note...</h3>

    <p id="p1" className='boxP'>~&gt; Hey Players this is the new starting for the brand new mincraft server <span id="AV">"Arctic Verse"</span> with tons of cool minigames</p>
    
    <p id="p2"className='boxP'>~&gt; This will be the best low latency server in Aisa</p>
    
    <p id="p3"className='boxP'>~&gt; This server will support both java and bedrock or pe versions of Minecraft</p>
    
    <p id="p4"className='boxP'>~&gt; And a last good thing is there will be 2 versions of this server <br /> <br /> #one for old pvp version: 1.8.9 <br /><br />#and one for new pvp version: 1.9+</p>
    
    </div>
    <footer>
        &copy; 2024 Arctic Verse. All rights reserved.
    </footer>
    </>
  )
}
export default App