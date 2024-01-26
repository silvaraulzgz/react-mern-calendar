

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-warning mb-4 px-4">
        <span className="navbar-brand text-dark">
            <i className="fas fa-calendar-alt text-dark"></i>
            &nbsp;
            Raúl Silva
        </span>

        <button className="btn btn-outline-dark">
            <i className="fas fa-sign-out-alt"></i>
            <span>Salir</span>
        </button>
    </div>
  )
}
