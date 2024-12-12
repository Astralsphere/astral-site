const dictionary = {
    'en': {
        'carregando': 'Loading',
        'title-sobre': 'Home',
        'title-camp': 'Campaign',
        'title-social': 'Updates',
        'title-faq': 'FAQ',
        'btn-campanha': 'Help on...',
        'header-siga': 'Keep up with the news by following us!',
        'header-sobre': 'Sobre o jogo',
        'header-imagens': 'Screenshots',
        'header-freq-faq': 'FAQ',
        'btn-access-camp': 'Access Campaign',
        'desenvolvido': 'Developed by ',
        'contato': 'Contact:'
    },
    'pt-br': {
        'carregando': 'Carregando',
        'title-sobre': 'Início',
        'title-camp': 'Campanha',
        'title-social': 'Atualizações',
        'title-faq': 'FAQ',
        'header-siga': 'Acompanhe as novidades seguindo nossas redes!',
        'header-sobre': 'Sobre o jogo',
        'header-imagens': 'Screenshots',
        'header-faq': 'Alguma duvida? Pode nos Perguntar!',
        'header-freq-faq': 'Perguntas frequentes',
        'text-camp': 'Entre nessa aventura como Plyun, um adorável ser de energia, e comece sua jornada para descobrir mais sobre o universo e si mesmo!',
        'text-social': 'Seja notificado sobre novidades seguindo nossas redes sociais!',
        'text-sobre-1' : 'Astral Adventure é o um jogo indie brasileiro em desenvolvimento, que mistura SHMUP (ou jogos de nave) com elementos de jogos de plataforma.',
        'text-sobre-2' : 'Desenvolvido pelo time independente Astralsphere Games, o jogo conta com visual pixel art 32 bit, jogabilidade arcade e músicas envolventes!',
        'btn-access-camp': 'Acessar Campanha',
        'desenvolvido': 'Desenvolvido pela ',
        'contato': 'Contato:'
    },
};

const translator = new EOTranslator(dictionary);

window.addEventListener('load', () => {
    const ddlLanguage = document.getElementById('ddlLanguage');
    const userLanguage = navigator.language || navigator.userLanguage;
    const language = userLanguage.split('-')[0] === 'pt' ? 'pt-br' : 'en';
    ddlLanguage.value = language;
    ddlLanguage.addEventListener('change', function () {
        const language = ddlLanguage.value;
        translator.translate('inform', { lang: language });
        try {
            translator.translateDOM(document.body, language);
        } catch (e) {
            console.error(e);
        }
    });

    ddlLanguage.dispatchEvent(new Event('change'));
});
