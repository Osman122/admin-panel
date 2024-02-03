const NavBar= ({ toggleSidebar }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
          <div className="container-fluid">
          
           
          
             <i onClick={toggleSidebar} className="bi bi-list"></i>
            
           
          </div>
        </nav>
        
      );
    };

export default NavBar;