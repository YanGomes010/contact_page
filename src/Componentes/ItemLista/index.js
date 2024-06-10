const ItemLista = ({texto, font, color})=>{
    return(
    <li style={{color:color}} className={font}>{texto}</li>
    )
}
export default ItemLista;