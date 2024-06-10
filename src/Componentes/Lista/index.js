import ItemLista from "../ItemLista";

let atalhos = ['Home', 'Features', 'Blog', 'Shop', 'About', 'Contact']
const Lista = ({className, color}) => {
    return (
        <ul  className={className}>
            {atalhos != [] && atalhos.map(atalho => <ItemLista color={color} texto={atalho} />)}
        </ul>
    )
}
export default Lista;