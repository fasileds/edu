import  "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <div className="title">
                 <h1>About Me</h1>
        </div>
           <div className="container">
                <div className="content">
                  <h2>Welcome to my website</h2>
                <p>
              My name is Eden Bekele I'm a frontend developer. 
              Also i'm a 3rd year software engineer student in Ethiopia
              at  Debre Berhan University.current political situation
              in Ethiopia is bad so using  internet  is not that
              easy for us. Plus being a female and helping my family and learning
              is not easy but i don't give up I started from html ,css,JavaScript,
              react,node.js,and now  i became front end developer. There is 
              one qoute that inspire me "Everyday life is like programming, i guess.
              If you love something, you can put beauty into it.Donald 
            </p>
              </div>
            <div className="section">
             <video controls>
              <source src="image-4-1_eZquOQZO.mp4" type="video/mp4"/>
             </video>
            </div>
        </div>
    </div>
         
        
     

  )
}
