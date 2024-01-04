import Logo from './reactjs-icon.png'
export default function Nav(){
    return(
        <header className="header">
           <div className='reactfact'>
            <img src={Logo} alt='NoImage'/>
            <h1>ReactFacts</h1>
            </div>
            <h1 className='react'>React Course-Project 1</h1>  
               
        </header>
    )
}