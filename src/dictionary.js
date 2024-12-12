const dictionary = {
    'en': {
        'carregando': 'Loading',
        'title-sobre': 'Home',
        'title-camp': 'Campaign',
        'title-social': 'Updates',
        'title-faq': 'FAQ',
        'text-camp': 'Embark on this adventure as Plyun, a lovable energy being, and start your journey to discover more about the universe and yourself!',
        'text-social': 'Stay up-to-date with the latest news by following our social media!',
        'text-sobre-1' : 'Astral Adventure is a Brazilian indie game in development, which combines SHMUP (or shooter) elements with platformer gameplay.',
        'text-sobre-2' : 'Developed by the independent team Astralsphere Games, the game features 32-bit pixel art visuals, arcade-style gameplay, and immersive music!',
        'header-siga': 'Keep up with the news by following us!',
        'header-sobre': 'About the game',
        'header-imagens': 'Screenshots',
        'header-freq-faq': 'FAQ',
        'btn-access-camp': 'Access Campaign',
        'desenvolvido': 'Developed by ',
        'contato': 'Contact:',
        'p1': 'When will the game be released?', 
        'r1': "The game is scheduled to be released in 2025, depending on the campaign's performance!",
        'p2': 'Will the game have microtransactions?', 
        'r2': 'The game will not have abusive microtransactions, only skins or small cosmetics!',
        'p3': 'Will it be free?', 
        'r3': 'Yes! The game will be released for free on Android platforms',
        'p4': 'How did the idea of Astral originate?', 
        'r4': 'Astral Adventure started as a TCC project, and then we gathered a passionate team to develop it!',
        'p5': 'Will there be a PC or Console version?', 
        'r5': "The console version depends on the campaign's success, but the PC version is more likely.",
        'p6': 'What were the inspirations?', 
        'r6': 'Astral Adventure was heavily influenced by platform games like Sonic and Kirby, mixed with shooter games!'
    },
    'pt-br': {
        'carregando': 'Carregando',
        'title-sobre': 'Início',
        'title-camp': 'Campanha',
        'title-social': 'Atualizações',
        'title-faq': 'FAQ',
        'text-camp': 'Entre nessa aventura como Plyun, um adorável ser de energia, e comece sua jornada para descobrir mais sobre o universo e si mesmo!',
        'text-social': 'Seja notificado sobre novidades seguindo nossas redes sociais!',
        'text-sobre-1' : 'Astral Adventure é o um jogo indie brasileiro em desenvolvimento, que mistura SHMUP (ou jogos de nave) com elementos de jogos de plataforma.',
        'text-sobre-2' : 'Desenvolvido pelo time independente Astralsphere Games, o jogo conta com visual pixel art 32 bit, jogabilidade arcade e músicas envolventes!',
        'header-siga': 'Acompanhe as novidades seguindo nossas redes!',
        'header-sobre': 'Sobre o jogo',
        'header-imagens': 'Screenshots',
        'header-freq-faq': 'Perguntas frequentes',
        'btn-access-camp': 'Acessar Campanha',
        'desenvolvido': 'Desenvolvido pela ',
        'contato': 'Contato:',
        'p1': 'Quando o jogo será lançado?',
        'r1': 'O lançamento do jogo está previsto para 2025, dependendo do desempenho da campanha!',
        'p2': 'O jogo terá microtransações?',
        'r2': 'O jogo não terá microtransações abusivas, apenas skins ou pequenos cosméticos!',
        'p3': 'Vai ser de graça?',
        'r3': 'Sim! O jogo será lançado gratuitamente nas plataformas Android',
        'p4': 'Como originou a ideia do Astral?',
        'r4': 'Astral Adventure começou como um projeto de TCC, então reunimos uma equipe apaixonada para desenvolver!',
        'p5': 'Vai ter versão para PC ou Consoles?',
        'r5': 'A versão para consoles depende do sucesso da campanha, mas a de PC é mais provável.',
        'p6': 'Quais foram as inspirações?',
        'r6': 'Astral Adventure se baseou muito em jogos plataformas como Sonic e Kirby, misturado com jogos de nave!'
    },
};

const translator = new EOTranslator(dictionary);

window.addEventListener('load', () => {
    const ddlLanguage = document.getElementById('ddlLanguage');
    const userLanguage = navigator.language || navigator.userLanguage;

    if (userLanguage === 'pt-br' || userLanguage === 'pt' || userLanguage === 'pt-BR') {
        ddlLanguage.value = 'pt-br';
    } else {
        ddlLanguage.value = 'en';
    }

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
