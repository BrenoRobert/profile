let autoTyped = new Typed('#auto-typing', {
  strings: [
    `^1000 &nbsp; &nbsp; Olá. prazer em conhecê-lo.<br> Me chamo Breno Robert e este é meu portfólio online.
 ^1000`,
  ],
  typeSpeed: 35,
  backSpeed: 25,
  loop: true,
});

function getDescription(option) {
  let description;

  switch (option) {
    case 'profile-option':
      description = `
        <p class="strong">Objetivo</p>
        <p>
          &nbsp; &nbsp; Desejo fazer parte do time da empresa oferecendo o
          melhor. Sou uma pessoa muito dedicada e comprometida com as
          atribuições que são dadas.<br />
          &nbsp; &nbsp; Sou muito comunicativo e sempre me esforço para
          entregar o meu melhor.
        </p>
        <p class="strong">Conhecimento técnico e acadêmico</p>
        <p>Java, PHP, Laravel, JQuery, Python, Pandas, Power BI, ChatGPT, OpenAI, Jira, Storybook, Jest, NextJS, Adobe Photoshop, Adobe Premier, SQL.</p>
        <p class="strong">Conhecimento sólido</p>
        <p>
          ReactJS, React Native, NestJS, Expo, GitHub, Git, Web Responsivo, HTML5, CSS3, Bootstrap, JavaScipt, TypeScript, Redux, Context API, Draw.io, Figma, Styled-component, Vite, Tailwindcss, Shadcn UI.
        </p>
        <div>
          <span>Para me conhecer melhor,&nbsp;</span>
          <a
            href="./assets/Curriculo-Breno.pdf"
            download
            class="cv-download"
            >baixe o currículo</a
          >
        </div>`;
      break;
    case 'education-option':
      description = `
        <p class="strong">Formação</p>
        <p>
          - Ensino Médio Completo
          2016 – 2018
          <br>
          <br>
          - Curso Técnico _ SENAI - SP
          Agosto 2019 – Abril 2021
          <br>
          &nbsp; &nbsp; Desenvolvimento De Sistemas
          <br>
          <br>
          - Graduação _ Universidade Paulista - Unip
          Agosto 2021 – Dezembro 2023
          <br>
          &nbsp; &nbsp; Análise e Desenvolvimento De Sistemas
        </p>
        <p class="strong">Cursos Profissionalizantes</p>
        <p>
          - Espanhol _ CEL (Centro de Estudo de Línguas) - 2013 – 2015
          <br>
          - Inglês _ CEL (Centro de Estudo de Línguas) - 2016
          <br>
          - Design de Games _ Microcamp - 2016 – 2018
          <br>
          - Arte e Design _ SAGA - 2017 – 2020
          <br>
          - Inglês (Avançado) _ Academy School - 2017 – 2020
          <br>
          - Excel (Básico) _ Senac - 2019
          <br>
          - Administração de Programações Logística _ Senac - 2019
          <br>
          - Segurança em Tecnologia da Informação _ Fundação Bradesco | Escola Virtual - 2020
          <br>
          - Cybersecurity Essentials_ CISCO - 2020
          <br>
          - Logística do Transporte _ Senac – 2020
          <br>
          - Administração de Terminais e Armazéns _ Senac – 2020
          <br>
          - Cálculo do Frete_ Senac - 2020
          <br>
          - Compras, Processamento de Pedidos e Controle de Estoques_ Senac - 2020
          <br>
          - Custos Operacionais do Transporte de Cargas _ Senac - 2020
          <br>
          - Embalagem e Armazenagem de Cargas _ Senac - 2020
          <br>
          - Ruby on Rails 5.x – Do início ao fim _ Udemy - 2023
          <br>
          - IA para Devs _ Rocketseat - 2023
          <br>
          - NestJS do Zero com TypeORM, Mongoose, Prisma e Swagger - 2023
          <br>
          - NLW IA _ Rocketseat – 2023
          <br>
          - Curso Online de Java _ Rocketseat - 2023
          <br>
          - React.Js e Next.Js (nível intermediário e avançado) _ Udemy – 2024
          <br>
          - NLW Expert trilha de Node.js – Rocketseat 2024
          <br>
          - NLW Unite trilha React.js – Rocketseat 2024
          <br>
          - SAP Primeiros Passos – Udemy 2024
          <br>
        </p>`;
      break;
    case 'professional-option':
      description = `
        <p class="strong">Experiências Profissionais</p>
        <p>
          - TangramMobile
          <br>
          &nbsp; &nbsp; Abril 2021 – Fevereiro 2022
          <br>
          &nbsp; &nbsp; • Monitoramento de envio de agendamentos.
          <br>
          &nbsp; &nbsp; • Desenvolvimento de Landing Page.
          <br>
          &nbsp; &nbsp; • Desenvolvimento de Aplicativo em React Native.
          <br>
          <br>
          - WRIT Solutions
          <br>
          &nbsp; &nbsp; Março 2022 – Fevereiro 2023
          <br>
          &nbsp; &nbsp; • Desenvolvimento de componentes, correção de bugs, teste e revisões de códigos em React Native, Expo, ReactJS e NestJS, outras tecnologias utilizadas como Styled-component, Storybook e Jest, Git, GitHub, Jira, Figma, Redux metodologia Kanban.
          <br>
          <br>
          - Águia Shoes
          <br>
          &nbsp; &nbsp; Outubro 2023 e Dezembro 2023
          <br>
          &nbsp; &nbsp; • Reposição de estoque, etiquetação, organização do estoque, recebimento de carga e descarga.
          <br>
          <br>
          - 2IOT
          <br>
          &nbsp; &nbsp; Novembro 2023 - Dezembro 2023
          <br>
          &nbsp; &nbsp; • Suporte de testes e verificação de rastreadores, desenho de diagrama de redes, suporte técnico na impressora.
        </p>
        `;
      break;
  }

  return description;
}

function typedProfile(el) {
  let switchProfile = document.getElementById('switchProfile');
  document.getElementById('auto-typing').parentElement.style.display = 'none';

  if (el.id === 'profile-option') {
    switchProfile.checked = true;
  } else {
    switchProfile.checked = false;
  }

  document.querySelector('#panel-content div').innerHTML = getDescription(
    el.id
  );
}
