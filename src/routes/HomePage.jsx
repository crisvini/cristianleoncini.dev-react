import ProfileImage from '../assets/profile.webp'
import Tecnologias from '../assets/technologies-svg.svg'
import Empresas from '../assets/companies-svg.svg'

const HomePage = () => {

    const experiencia = new Date().getFullYear() - new Date("08/02/2021").getFullYear()

    return (
        <main className="container-xxl mt-1 mt-lg-3 mb-3">
            <section>
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Quem sou eu?</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-6 order-1 order-md-0">
                        <div className="h-100 d-flex flex-column justify-content-center align-items-start mt-2 mt-md-0">
                            <h3>Sobre mim</h3>
                            <p>
                                Olá! Meu nome é Cristian e sou um entusiasta de tecnologia de <span id="idade"></span>
                                anos. Concluí minha
                                graduação em Engenharia de Software pela <a href="https://www.unaerp.br/cursos/engenharia-de-software" target="_blank">UNAERP</a> no final de 2022. Atualmente, trabalho
                                como desenvolvedor web full-stack, contribuindo ativamente para projetos e expandindo
                                minhas habilidades nessa área emocionante.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-0 order-md-1">
                        <div className="w-100 d-flex justify-content-end">
                            <div className="image-cropper">
                                <img src={ProfileImage} className="rounded img-cropped" alt="foto de perfil cristian vinicius leoncini lopes" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Tecnologias</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-6 order-0">
                        <div className="w-100 d-flex justify-content-start">
                            <img src={Tecnologias} alt="tecnologias" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-1">
                        <div className="h-100 d-flex flex-column justify-content-center align-items-start">
                            <h3>Tecnologias dominadas</h3>
                            <p>
                                Tenho {experiencia}+ anos de experiência como desenvolvedor, com
                                proficiência em diversas
                                tecnologias. Tenho amplo conhecimento em PHP, CakePHP, jQuery, JavaScript, MySQL,
                                MariaDB, PostgreSQL, CSS, HTML e Bootstrap. Minha expertise nessas tecnologias me
                                permite criar efetivamente aplicações web robustas, garantindo experiências de usuário
                                perfeitas e implementação de código eficiente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Empresas</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-md-6 order-1 order-md-0">
                        <div className="h-100 d-flex flex-column justify-content-center align-items-start mt-2 mt-md-0">
                            <h3 className="texto-suporte-1">Experiências profissionais</h3>
                            <p className="texto-suporte-2">Adquiri experiência profissional como estagiário na Plurya, onde
                                forneci suporte ao cliente, solucionei problemas e desenvolvi tanto o back-end quanto o
                                front-end de aplicações web para clientes como Realize, Banco Randon, Banco Digimais e
                                Socinal Financeira. Fui promovido a Desenvolvedor Web Júnior na Plurya, focando no
                                desenvolvimento e manutenção de aplicações web para os mesmos clientes. Também atuei
                                como
                                Desenvolvedor Web Pleno na Ipluc, onde aprimorei minhas habilidades no
                                desenvolvimento e implementação de novos recursos, ao mesmo tempo em que forneci suporte
                                para funcionalidades existentes.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-0 order-md-1">
                        <div className="w-100 d-flex justify-content-end">
                            <div className="w-100 d-flex justify-content-start">
                                <img src={Empresas} alt="empresas" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePage