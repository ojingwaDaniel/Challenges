import Logo from './reactjs-icon.png'
export default function Nav(){
    return(
        <nav>
            <img src={Logo} alt='NoImage' className='nav--icon'/>
            <h3 className='nav--logo-text'>ReactFacts</h3>
            <h4 className='nav--title'>React Course-Project 1</h4>  
               
        </nav>
    )
}