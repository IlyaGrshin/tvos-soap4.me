export default {
	'auth-checking': 'Проверяем авторизацию...',

	'menu-my': 'Мои',
	'menu-all': 'Сериалы',
	'menu-search': 'Поиск',
	'menu-settings': 'Настройки',

	'settings-caption': 'Настройки',

	'settings-logout-caption': 'Точно выйти из аккаунта?',
	'settings-logout-logout_btn': 'Выйти',
	'settings-logout-cancel_btn': 'Отмена',

	'settings-titles-account': 'Акканут',
	'settings-titles-network': 'Сеть',
	'settings-titles-about': 'О программе',

	'settings-labels-video_quality': 'Качество видео',
	'settings-labels-translation': 'Перевод серий',
	'settings-labels-video_playback': 'Воспроизведение видео',
	'settings-labels-language': 'Язык интерфейса',
	'settings-labels-login': 'Войти в аккаунт',
	'settings-labels-logout': 'Выйти из аккаунта',
	'settings-labels-speedtest': 'Тест скорости',
	'settings-labels-version': 'Версия',

	'settings-descriptions-video_quality': 'Предпочитаемое качество видео для воспроизведения если оно доступно.',
	'settings-descriptions-translation': 'Для того чтоб просматривать эпизоды с субтитрами необходимо активировать специальный параметр в настройках сайта soap4.me. В противном случае будут отображаться только серии с переводом.',
	'settings-descriptions-video_playback': 'Настройка воспроизведения серий. Воспроизводить их непрерывно друг за другом или по эпизоду.',

	'settings-values-sd': 'SD',
	'settings-values-hd': 'HD',
	'settings-values-fhd': 'Full HD',
	'settings-values-subtitles': 'Приоритет субтитров',
	'settings-values-localization': 'Приоритет локализации',
	'settings-values-continues': 'Без остановки',
	'settings-values-by_episode': 'По эпизоду',
	'settings-values-auto': 'Язык системы',
	'settings-values-en': 'English',
	'settings-values-ru': 'Русский',

	'speedtest-caption': 'Тест скорости',
	'speedtest-loading': 'Загрузка информации о серверах...',
	'speedtest-begin': 'Начать тест',
	'speedtest-testing': 'Тестируем скорость загрузки...',

	'speedtest-result': ({speed}) => `${speed} Мб/с`,
	'speedtest-result-too-slow': 'Слишком медленно. Пропускаем...',

	'speedtest-country-fr': 'Франция',
	'speedtest-country-de': 'Германия',
	'speedtest-country-nl': 'Нидерланды',
	'speedtest-country-ru': 'Россия',

	'episode-more': 'Еще',
	'episode-mark-as-watched': 'Отметить просмотренным',
	'episode-mark-as-unwatched': 'Отметить непросмотренным',

	'season-title-more': 'Еще',
	'season-mark-as-watched': 'Отметить сезон как просмотренный',
	'season-mark-as-unwatched': 'Отметить сезон как не просмотренный',

	'tvshow-title': ({title_ru}) => title_ru,
	'tvshow-title-from-episode': ({soap_ru}) => soap_ru,
	'tvshow-episode-title': ({title_ru}) => title_ru,
	'tvshow-season': ({seasonNumber}) => `Сезон ${seasonNumber}`,

	'tvshow-status': 'Статус',
	'tvshow-genres': 'Жанры',
	'tvshow-actors': 'Актеры',
	'tvshow-seasons': 'Сезоны',
	'tvshow-also-watched': 'Рекомендации',
	'tvshow-ratings': 'Рейтинги и Отзывы',
	'tvshow-cast-crew': 'Актеры',

	'tvshow-information': 'Информация',
	'tvshow-information-year': 'Год',
	'tvshow-information-runtime': 'Тайминг',
	'tvshow-information-country': 'Страна',
	'tvshow-information-network': 'Телесеть',

	'tvshow-languages': 'Языки',
	'tvshow-languages-primary': 'Основные',
	'tvshow-languages-primary-values': 'Русский, Английский',

	'tvshow-title-more': 'Еще',
	'tvshow-mark-as-watched': 'Отметить Сериал как просмотренный',
	'tvshow-mark-as-unwatched': 'Отметить Сериал как не просмотренный',

	'tvshow-average-imdb': ({amount}) => `На основе рейтинга ${amount} пользователей IMDB.`,
	'tvshow-average-kinopoisk': ({amount}) => `На основе рейтинга ${amount} пользователей Кинопоиска.`,

	'tvshow-liked-by': 'Нравится',
	'tvshow-liked-by-people': ({likes}) => `пользователям: ${likes}`,
	'tvshow-liked-by-no-one': 'никому',

	'tvshow-status-ended': 'Закончен',
	'tvshow-status-closed': 'Закрыт',
	'tvshow-status-running': 'Идет показ',

	'tvshow-control-continue-watching': 'Продолжить Просмотр',
	'tvshow-control-show-trailer': 'Посмотреть Трейлер',
	'tvshow-control-start-watching': 'Начать Просмотр',
	'tvshow-control-stop-watching': 'Закончить Просмотр',
	'tvshow-control-more': 'Еще',

	'new-episode-soon': 'Скоро',
	'new-episode-day': 'Эпизод в течении дня',
	'new-episode-custom-date': ({date}) => `Эпизод ${date}`,

	'new-season-soon': 'Скоро',
	'new-season-day': 'Сезон в течении дня',
	'new-season-custom-date': ({date}) => `Сезон ${date}`,

	'my-caption': 'Мои',

	'my-closed': 'Завершенные',
	'my-watched': 'Просмотренные',
	'my-new-episodes': 'С новыми эпизодами',

	'all-caption': 'Сериалы',

	'all-group-by': 'Группировать по',
	'all-group-by-title': ({title}) => `Группировать по ${title}`,

	'all-group-title-name': 'Имени',
	'all-group-name-title': 'A — Z',

	'all-group-title-date': 'Дате',

	'all-group-title-likes': 'Лайкам',
	'all-group-likes-title-over-thousand': ({thousand}) => `Более ${thousand}k`,
	'all-group-likes-title-over-hundred': ({hundred}) => `Более ${hundred}`,
	'all-group-likes-title-lower-hundred': ({hundred}) => `Менее ${hundred}`,

	'all-group-title-rating': 'Рейтингу',

	'all-group-title-completeness': 'Завершенности',
	'all-group-completeness-title': 'Завершенные',

	'search-latest': 'Новые сериалы',
	'search-popular': 'Популярные сериалы',
	'search-persons': 'Люди',
	'search-actor': 'Актер / Актриса',
	'search-tvshows': 'Сериалы',

	'actor-tvshows': 'Сериалы',
	'actor-title': 'Актер / Актриса',

	'authorize-caption': 'Авторизация',
	'authorize-description': 'Для того чтоб просматривать свои подписки и контент необходимо авторизоваться',
	'authorize-control-trigger': 'Авторизоваться',

	'login-step1-caption': 'Введите логин (e-mail не является логином)',
	'login-step1-placeholder': 'Логин',
	'login-step1-button': 'Далее',

	'login-step2-caption': 'Введите пароль (минимум 6 символов)',
	'login-step2-placeholder': 'Пароль',
	'login-step2-button': 'Авторизоваться',

	'login-step3-caption': 'Авторизация...',

	'login-error-wrong-login': 'Не верный логин или пароль',
	'login-error-something-went-wrong': 'Что-то пошло не так =(',
};
