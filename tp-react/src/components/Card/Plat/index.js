import './index.css';

export const Plat = ({ Plat,contenu, image, prix}) => {
    return (
      <div className="Menu">
      
          <h4>{Plat}</h4>
          <img className="image-plat" src={image} alt="plat"></img>
        <hr/>
        <p className="contenu-plat">{contenu}</p>
        
        <span className ="prix-plat">{prix}</span>
        
      </div>
    )
  }
   