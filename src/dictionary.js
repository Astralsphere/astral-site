const dictionary = {
    'en': {
        'title-sobre': 'Main',
        'title-camp': 'Campaign',
        'title-social': 'Updates',
        'title-faq': 'FAQ',
        'btn-campanha': 'Help on...',
        'header-siga': 'Keep up with the news by following us!',
        'header-sobre': 'Sobre o jogo',
        'header-imagens': 'Screenshots',
        'header-faq': 'Any question? Ask us!',
        'header-freq-faq': 'FAQ',
        'text-sobre': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus vestibulum volutpat. Nam varius, risus at aliquet faucibus, quam diam facilisis est, quis euismod massa lacus et orci. Cras sagittis, tortor id luctus scelerisque, mi magna posuere sapien, sit amet sollicitudin dui dui sed urna. Mauris ultrices commodo nibh, ut tincidunt orci facilisis ut. Phasellus imperdiet sem at mauris congue finibus. Suspendisse viverra maximus leo, nec congue augue fringilla ac. Duis sem neque, sagittis a tellus sit amet, facilisis lobortis leo. Aliquam orci ex, convallis id sem nec, vulputate interdum mi. Nam interdum nibh id cursus elementum. Ut ut purus et mi varius lacinia. Donec congue sed orci at imperdiet. In elementum, velit in volutpat iaculis, ipsum mauris ornare quam, viverra rhoncus purus ante vel nibh. Aliquam dictum suscipit elementum.',
    },
    'pt-br': {
        'title-sobre': 'Início',
        'title-camp': 'Campanha',
        'title-social': 'Atualizações',
        'title-faq': 'FAQ',
        'btn-campanha': 'Ajude a Campanha',
        'header-siga': 'Acompanhe as novidades seguindo nossas redes!',
        'header-sobre': 'Sobre o jogo',
        'header-imagens': 'Screenshots',
        'header-faq': 'Alguma duvida? Pode nos Perguntar!',
        'header-freq-faq': 'Perguntas frequentes',
        'text-sobre': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus vestibulum volutpat. Nam varius, risus at aliquet faucibus, quam diam facilisis est, quis euismod massa lacus et orci. Cras sagittis, tortor id luctus scelerisque, mi magna posuere sapien, sit amet sollicitudin dui dui sed urna. Mauris ultrices commodo nibh, ut tincidunt orci facilisis ut. Phasellus imperdiet sem at mauris congue finibus. Suspendisse viverra maximus leo, nec congue augue fringilla ac. Duis sem neque, sagittis a tellus sit amet, facilisis lobortis leo. Aliquam orci ex, convallis id sem nec, vulputate interdum mi. Nam interdum nibh id cursus elementum. Ut ut purus et mi varius lacinia. Donec congue sed orci at imperdiet. In elementum, velit in volutpat iaculis, ipsum mauris ornare quam, viverra rhoncus purus ante vel nibh. Aliquam dictum suscipit elementum.',
    },
};

const translator = new EOTranslator(dictionary);

window.addEventListener('load', () => {
    const ddlLanguage = document.getElementById('ddlLanguage');
    ddlLanguage.value = document.documentElement.lang || 'en';
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
