import logo from '../../images/logo.svg'
import Perfil from '../../images/perfil.png'
import Carrinho from '../../images/carrinho.png'
import Lista from '../Lista';
import Icone from '../Icone/index.js';
import MenuTelefone from '../MenuTelefone/index.js';

const Header = () => {
    return (
        <header className='p-0 m-0 flex justify-content-between align-items-center flex-wrap'>
            <img src={logo} alt='logo' />
            <section className='z-3 flex align-items-center grid-nogutter   gap-4 sm:block'>
                <div className='h-full hidden lg:flex align-items-center justify-content-center'>
                    <Lista color='#000' className='list-none flex justify-content-center gap-3' />
                    <Icone src={Perfil} />
                    <Icone src={Carrinho} />
                </div>
            </section>
            <MenuTelefone/>
        </header>
    )
}

export default Header;