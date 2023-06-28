function Nav(props) {
    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/">
                        ❤️ Todo
                    </a>
                    <form className="d-flex" role="search">
                        <input onChange={(e)=>{props.query(e)}} id="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
                
            </nav>
        </>
        )
    }

    export default Nav