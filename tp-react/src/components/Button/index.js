export const Button =  ({ onClick, Label }) => {
    
    return(
        <button classname = 'container' onclick ={onClick} >
            {Label}
        </button>
);

}
