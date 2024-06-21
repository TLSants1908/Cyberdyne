const prompt = require('prompt-sync')();

console.log("Cyberdyne Systems: Bem Vindo ao Sistema de Chamados !\n");

let numeroChamado = null;
let tituloChamado = "";
let descricaoChamado = "";
let statusChamado = "";
let chamados = [];

let opcao = 0;

while (opcao !== 5) {
    console.log("\n===== MENU =====");
    console.log("1. Abrir Novo Chamado.");
    console.log("2. Verificar Chamado.");
    console.log("3. Fechar Chamado.");
    console.log("4. Avaliar Equipe.");
    console.log("5. Sair\n");

    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            console.log("\nOpção 1 selecionada: Abrir Chamado");

            const numeroAleatorio = Math.floor(Math.random() * 100000);
            tituloChamado = prompt("Digite o título do chamado: ");
            descricaoChamado = prompt("Digite a descrição do chamado: ");
            statusChamado = "Aberto";
            numeroChamado = numeroAleatorio;
            console.log("\nChamado nº" + numeroChamado + ": " + tituloChamado + " - Aberto !");
            break;

        case 2:
            console.log("Opção 2 selecionada: Verificar Chamado");
            if (numeroChamado !== null) {
                console.log("Chamado nº" + numeroChamado + ": " + tituloChamado + " - " + statusChamado);
            } else {
                console.log("Nenhum chamado aberto encontrado.");
            }
            break;

        case 3:
            console.log("Opção 3 selecionada: Fechar Chamado");
            if (numeroChamado !== null) {
                statusChamado = "Fechado";
                console.log("Chamado nº" + numeroChamado + ": " + tituloChamado + " está " + statusChamado);
            } else {
                console.log("Nenhum chamado aberto encontrado.");
            }
            break;

        case 4:
            console.log("Opção 4 selecionada: Avaliar Equipe");
            console.log("Avalie a Equipe Cyberdyne ! De 1 a 5, como foi seu atendimento ?\n");
            console.log("1. Péssimo, Precisa Melhorar (˘︹˘)");
            console.log("2. Okay, Mas dá para Ser Melhor... (ㆆ_ㆆ)");
            console.log("3. Estão Indo Bem ! (>‿◠)");
            console.log("4. Super Excelente !!! ᕙ(^▿^-ᕙ)");
            let feedbackOpcao = parseInt(prompt("Escolha uma opção: "));

            switch (feedbackOpcao) {
                case 1:
                    console.log("Lamentamos profundamente pelo péssimo atendimento, a Cyberdyne está comprometida em melhorar para você! Até mais !");
                    break;

                case 2:
                    console.log("A Equipe Cyberdyne Agradece seu Feedback, Vamos continuar a aperfeiçoar nosso atendimento para você! Até mais !");
                    break;

                case 3:
                    console.log("Agradecemos pelo feedback, a Cyberdyne está sempre disposta a melhorar para você! Até mais !");
                    break;

                case 4:
                    console.log("Hull !!! A Equipe Cyberdyne fica muito contente com o seu feedback !!! Até a Proxima (͠≖ ͜ʖ͠≖)👌");
                    break;

                default:
                    console.log("Te Vejo Em Breve !!! (•◡•) /");
            }
            break;

        case 5:
            console.log("A CyberdyneSystem Agradece seu contato. Até mais!");
            break;

        default:
            console.log("Opção inválida");
            break;
    }
}