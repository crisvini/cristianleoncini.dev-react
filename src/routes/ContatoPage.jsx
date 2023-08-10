import ContatoJson from '../json/ContatoJson'

const ContatoPage = ({ idioma }) => {
    if (idioma === 'ptBR') var json = ContatoJson.ptBR
    else var json = ContatoJson.enUS

    return (
        <main className="container-xxl mt-1 mt-lg-3 mb-3">
            <section id="contact-me">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center texto-principal">{json.titulo}</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-6 order-1 order-md-0">
                        <div className="h-100 d-flex flex-column justify-content-center align-items-start mt-2 mt-md-0">
                            <p className="texto-suporte-2">{json.texto}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-0 text-center text-md-end">
                        <div className="row">
                            <div className="col-12">
                                <a href="https://www.linkedin.com/in/cristian-vin%C3%ADcius-leoncini-lopes-36a456198/" target="_blank" className="no-link"><span className="fs-1 texto-principal texto-navbar-hover">
                                    LinkedIn <i className="bi bi-linkedin texto-verde texto-laranja-hover"></i>
                                </span>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <a href="https://wa.me//5516994369764?text=Ol%C3%A1%21+Estou+interessado+em+suas+habilidades+de+desenvolvimento+de+software." target="_blank" className="no-link">
                                    <span className="fs-1 texto-principal texto-navbar-hover">
                                        WhatsApp <i className="bi bi-whatsapp fs-1 texto-verde texto-laranja-hover"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <a href="https://github.com/crisvini" target="_blank" className="no-link">
                                    <span className="fs-1 texto-principal texto-navbar-hover">
                                        GitHub <i className="bi bi-github texto-verde texto-laranja-hover"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <a href="https://www.cristianleoncini.dev/curriculum/Curr%C3%ADculo%20Cristian.pdf" download target="_blank" className="no-link">
                                    <span className="fs-1 texto-principal texto-navbar-hover">
                                        {json.curriculo} <i className="bi bi-download texto-verde texto-laranja-hover"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="thanks" className="mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="fs-10 text-center texto-quebrado">
                            {json.agradecimento}
                        </h1>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContatoPage