import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import logoWhite from '../../images/logo-white.svg'
import { useState } from 'react';
import Lista from '../Lista';


const MenuTelefone = () => {

    const [visibleRight, setVisibleRight] = useState(false)

    return (
        <section className='lg:hidden'>

            <Button icon='pi pi-bars' style={{color:'#000'}} onClick={() => setVisibleRight(true)} />
            <Sidebar className='bg-black-alpha-90' visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <img className='pt-2 ml-3' src={logoWhite} />
                <Lista color='#fff' className=' list-none flex flex-column gap-4 pt-7 ml-4' />
            </Sidebar>
        </section>
    )
}

export default MenuTelefone;