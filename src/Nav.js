function Nav(props) {
    return (
        <>
            <nav className="navbar bg-dark sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/">
                        ❤️ Todo
                    </a>
                    <form className="d-flex" role="search">
                        <input onChange={(e)=>{props.query(e)}} id="search" className="text-bg-secondary border-0 form-control me-2 form-control-sm" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
                
            </nav>
        </>
        )
    }

    export default Nav