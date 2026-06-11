// Inicialização das variáveis globais do ecossistema
let prodEcon = 50;
let sustAmb = 50;

// Atualiza a barra de progresso logo no início
atualizarInterface();

function processarCiclo(decisao) {
    let deltaProd = 0;
    let deltaSust = 0;
    let textoRelatorio = "";

    switch(decisao) {
        case 'sombreado':
            deltaProd = 5;
            deltaSust = 25;
            textoRelatorio = "🌿 O erval sombrado preserva a Mata Atlântica e a biodiversidade local (+25% Sustentabilidade). A erva cresce mais lenta, mas possui altíssima qualidade (+5% Produção).";
            break;
        case 'plenosol':
            deltaProd = 25;
            deltaSust = -20;
            textoRelatorio = "☀️ A pleno sol o crescimento é acelerado, gerando grande volume de folhas rápido (+25% Produção). Porém, desgasta o solo e elimina o habitat de animais nativos (-20% Sustentabilidade).";
            break;
        case 'biomassa':
            deltaProd = 15;
            deltaSust = 15;
            textoRelatorio = "💨 O trocador de calor impede que gases nocivos toquem o produto (+15% Produção por qualidade) e reduz drasticamente a emissão de fumaça na atmosfera (+15% Sustentabilidade).";
            break;
        case 'fumaça':
            deltaProd = 10;
            deltaSust = -15;
            textoRelatorio = "🔥 A queima direta tem baixo custo de instalação (+10% Produção), mas gera poluição atmosférica local e riscos de perda de controle do calor (-15% Sustentabilidade).";
            break;
        case 'vacuo':
            deltaProd = 20;
            deltaSust = 5;
            textoRelatorio = "📦 O pacote a vácuo impede a oxidação, mantendo a erva verde por meses nas prateleiras, reduzindo o desperdício comercial (+20% Produção).";
            break;
        case 'comum':
            deltaProd = -5;
            deltaSust = 0;
            textoRelatorio = "📄 A embalagem simples de papel reduz custos imediatos, mas diminui o tempo de prateleira da erva-mate, gerando potenciais perdas de lote comerciais (-5% Produção).";
            break;
    }

    // Calcula mantendo as métricas entre 0 e 100
    prodEcon = Math.max(0, Math.min(100, prodEcon + deltaProd));
    sustAmb = Math.max(0, Math.min(100, sustAmb + deltaSust));

    // Imprime e atualiza os resultados na tela
    atualizarInterface();
    document.getElementById('log-mensagem').innerHTML = textoRelatorio;
    
    // Verifica os gatilhos de vitória ou derrota
    analisarFimDeJogo();
}

function atualizarInterface() {
    // Atualiza as labels de texto
    document.getElementById('txt-prod').innerText = prodEcon + "%";
    document.getElementById('txt-sust').innerText = sustAmb + "%";

    // Atualiza a largura das barras de progresso (CSS dinâmico)
    document.getElementById('barra-prod').style.width = prodEcon + "%";
    document.getElementById('barra-sust').style.width = sustAmb + "%";
}

function analisarFimDeJogo() {
    const containerLog = document.getElementById('log-mensagem');
    
    if (sustAmb <= 25) {
        containerLog.innerHTML += "<br><br><strong style='color:#c62828;'>⚠️ ALERTA DE IMPACTO: A degradação ambiental está severa! O solo empobrecido reduzirá a qualidade da erva-mate nos próximos anos.</strong>";
    } else if (prodEcon >= 75 && sustAmb >= 75) {
        containerLog.innerHTML += "<br><br><strong style='color:#2e7d32;'>🏆 EXCELÊNCIA AGRINHO: Você estruturou uma cadeia de erva-mate perfeita! Produtividade industrial forte alinhada com a conservação da floresta!</strong>";
    }
}
