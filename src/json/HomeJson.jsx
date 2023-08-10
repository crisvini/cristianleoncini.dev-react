const HomeJson = () => {
    const idade = Math.floor((new Date() - new Date('02/12/2001').getTime()) / (1000 * 60 * 60 * 24 * 365.25))
    const experiencia = new Date().getFullYear() - new Date("08/02/2021").getFullYear()

    const json = [
        {
            "idioma": "pt-BR",
            "conteudo": [
                {
                    "titulo": "Quem sou eu?",
                    "subtitulo": "Sobre mim",
                    "texto": "Olá! Meu nome é Cristian e sou um entusiasta de tecnologia de " + idade + " anos. Concluí minha graduação em Engenharia de Software pela " + <a href="https://www.unaerp.br/cursos/engenharia-de-software" target="_blank">UNAERP</a> + " no final de 2022. Atualmente, trabalho como desenvolvedor web full-stack, contribuindo ativamente para projetos e expandindo minhas habilidades nessa área emocionante.",
                    "imagem": ProfileImage
                },
                {
                    "titulo": "Tecnologias",
                    "subtitulo": "Tecnologias dominadas",
                    "texto": "Tenho " + experiencia + "+ anos de experiência como desenvolvedor, com proficiência em diversas tecnologias. Tenho amplo conhecimento em PHP, CakePHP, jQuery, JavaScript, MySQL, MariaDB, PostgreSQL, CSS, HTML e Bootstrap. Minha expertise nessas tecnologias me permite criar efetivamente aplicações web robustas, garantindo experiências de usuário perfeitas e implementação de código eficiente.",
                    "imagem": Tecnologias
                },
                {
                    "titulo": "Empresas",
                    "subtitulo": "Experiências profissionais",
                    "texto": "Adquiri experiência profissional como estagiário na Plurya, onde forneci suporte ao cliente, solucionei problemas e desenvolvi tanto o back-end quanto o front-end de aplicações web para clientes como Realize, Banco Randon, Banco Digimais e Socinal Financeira. Fui promovido a Desenvolvedor Web Júnior na Plurya, focando no desenvolvimento e manutenção de aplicações web para os mesmos clientes. Também atuei como Desenvolvedor Web Pleno na Ipluc, onde aprimorei minhas habilidades no desenvolvimento e implementação de novos recursos, ao mesmo tempo em que forneci suporte para funcionalidades existentes.",
                    "imagem": Empresas
                }
            ]
        },
        {
            "idioma": "en-US",
            "conteudo": [
                {
                    "titulo": "Who am I?",
                    "subtitulo": "About me",
                    "texto": "Hello! My name is Cristian, and I'm a " + idade + " year old technology enthusiast; I graduated from " + <a href="https://www.unaerp.br/cursos/engenharia-de-software" target="_blank">UNAERP</a> + " with a degree in Software Engineering in late 2022. Currently, I work as a full-stack web developer, actively contributing to projects and expanding my skills in this exciting field.",
                    "imagem": ProfileImage
                },
                {
                    "titulo": "Technologies",
                    "subtitulo": "Mastered technologies",
                    "texto": "I have " + experiencia + "+ years of experience as a developer with proficiency in various technologies. I am well-versed in PHP, CakePHP, jQuery, javascript, MySQL, MariaDB, PostgreSQL, CSS, HTML, and Bootstrap. My expertise in these technologies enables me to effectively create robust web applications, ensuring seamless user experiences and efficient code implementation.",
                    "imagem": Tecnologias
                },
                {
                    "titulo": "Companies",
                    "subtitulo": "Professional experiences",
                    "texto": "I have gained professional experience as an intern at Plurya, where I provided customer support, addressed bugs, and developed both the back-end and front-end of web applications for clients such as Realize, Banco Randon, Banco Digimais, and Socinal Financeira. I was promoted to Junior Web Developer at Plurya, focusing on developing and maintaining web applications for the same clients. I also worked as a Mid-level Web Developer at Ipluc, where I enhanced my skills in developing and implementing new features, while also providing support for existing functionalities.",
                    "imagem": Empresas
                }
            ]
        }
    ]

    return json
}

export default HomeJson