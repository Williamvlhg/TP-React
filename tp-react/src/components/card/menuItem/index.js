export const Plat = ({ Plat,contenu, image, prix}) => {
    return (
      <div className="Plat">
      
          <h4>{Plat}</h4>
          <img className="image-plat">{image}</img>
        <hr/>
        <p className="contenu-plat">{contenu}</p>
        
        <span className ="prix-plat">{prix}</span>
        
      </div>
    )
  }
   