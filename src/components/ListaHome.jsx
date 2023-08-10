import HomeJson from '../json/HomeJson'

const ListaHome = ({ json }) => {
    const idioma = 'ptBR'

    {/* Validar qual o idioma e criar um if */ }

    return (
        <>
            {
                idioma == 'ptBR' ?
                    json.ptBR.map((value, key) => (
                        <section key={key} className={key > 0 ? 'mt-5' : ''}>
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="text-center">{value.titulo}</h1>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className={key % 2 === 0 ? 'col-12 col-md-6 order-0 order-md-0' : 'col-12 col-md-6 order-1 order-md-1'}>
                                    <div className="h-100 d-flex flex-column justify-content-center align-items-start mt-2 mt-md-0">
                                        <h3>{value.subtitulo}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: value.texto }} />
                                    </div>
                                </div>
                                <div className={key % 2 === 0 ? 'col-12 col-md-6 order-0 order-md-1' : 'col-12 col-md-6 order-1 order-md-0'}>
                                    <div className="w-100 d-flex justify-content-end">
                                        {value.perfil ?
                                            <div className="image-cropper">
                                                <img src={value.imagem} className="rounded img-cropped" alt="foto de perfil cristian vinicius leoncini lopes" />
                                            </div>
                                            :
                                            <div className="w-100 d-flex justify-content-start">
                                                <img src={value.imagem} alt="empresas" />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))
                    :
                    json.enUS.map((value, key) => (
                        <section key={key} className={key > 0 ? 'mt-5' : ''}>
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="text-center">{value.titulo}</h1>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className={key % 2 === 0 ? 'col-12 col-md-6 order-0 order-md-0' : 'col-12 col-md-6 order-1 order-md-1'}>
                                    <div className="h-100 d-flex flex-column justify-content-center align-items-start mt-2 mt-md-0">
                                        <h3>{value.subtitulo}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: value.texto }} />
                                    </div>
                                </div>
                                <div className={key % 2 === 0 ? 'col-12 col-md-6 order-0 order-md-1' : 'col-12 col-md-6 order-1 order-md-0'}>
                                    <div className="w-100 d-flex justify-content-end">
                                        {value.perfil ?
                                            <div className="image-cropper">
                                                <img src={value.imagem} className="rounded img-cropped" alt="foto de perfil cristian vinicius leoncini lopes" />
                                            </div>
                                            :
                                            <div className="w-100 d-flex justify-content-start">
                                                <img src={value.imagem} alt="empresas" />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))
            }
        </>
    )
}

export default ListaHome