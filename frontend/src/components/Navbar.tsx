export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-primary bg-gradient mb-5 py-3">
            <div className="container-fluid">
                <a className="navbar-brand" href=".">Pet Lovers</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="/clientes">Clientes</a>
                        <a className="nav-link" aria-current="page" href="/servicos">Serviços</a>
                        <a className="nav-link" aria-current="page" href="/produtos">Produtos</a>
                    </div>
                </div>
            </div>
        </nav>
        )
}