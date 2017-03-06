/** @jsx TVDML.jsx */

import * as TVDML from 'tvdml';

import * as settings from '../settings';
import * as localization from '../localization';

import {link} from '../utils';
import * as user from '../user';
import {deepEqualShouldUpdate} from '../utils/components';

import {logout, version, checkSession} from '../request/soap';
import {getStartParams} from '../utils';

const {get: i18n} = localization;

const {
	VIDEO_QUALITY,
	TRANSLATION,
	VIDEO_PLAYBACK,
	LANGUAGE,
} = settings.params;

const {SD, HD, FULLHD} = settings.values[VIDEO_QUALITY];
const {LOCALIZATION, SUBTITLES} = settings.values[TRANSLATION];
const {CONTINUES, BY_EPISODE} = settings.values[VIDEO_PLAYBACK];
const {AUTO, EN, RU} = settings.values[LANGUAGE];

const titleMapping = {
	[VIDEO_QUALITY]: 'settings-labels-video_quality',
	[TRANSLATION]: 'settings-labels-translation',
	[VIDEO_PLAYBACK]: 'settings-labels-video_playback',
	[LANGUAGE]: 'settings-labels-language',
};

const onlyForExtendedAccounts = [
	TRANSLATION,
	VIDEO_PLAYBACK,
];

const descriptionMapping = {
	[VIDEO_QUALITY]: 'settings-descriptions-video_quality',
	[TRANSLATION]: 'settings-descriptions-translation',
	[VIDEO_PLAYBACK]: 'settings-descriptions-video_playback',
};

const valueMapping = {
	[SD]: 'settings-values-sd',
	[HD]: 'settings-values-hd',
	[FULLHD]: 'settings-values-fhd',
	[SUBTITLES]: 'settings-values-subtitles',
	[LOCALIZATION]: 'settings-values-localization',
	[CONTINUES]: 'settings-values-continues',
	[BY_EPISODE]: 'settings-values-by_episode',
	[AUTO]: 'settings-values-auto',
	[EN]: 'settings-values-en',
	[RU]: 'settings-values-ru',
};

export default function() {
	return TVDML
		.createPipeline()
		.pipe(TVDML.render(TVDML.createComponent({
			getInitialState() {
				const extended = user.isExtended();
				const authorized = user.isAuthorized();
				const language = localization.getLanguage();

				return {
					language,
					extended,
					authorized,
					settings: settings.getAll(),
				};
			},

			componentDidMount() {
				this.languageChangeStream = localization.subscription();
				this.languageChangeStream.pipe(({language}) => this.setState({language}));

				this.userStateChangeStream = user.subscription();
				this.userStateChangeStream.pipe(() => this.setState({
					extended: user.isExtended(),
					authorized: user.isAuthorized(),
				}));
			},

			componentWillUnmount() {
				this.languageChangeStream.unsubscribe();
				this.userStateChangeStream.unsubscribe();
			},

			shouldComponentUpdate: deepEqualShouldUpdate,

			render() {
				const {
					extended,
					settings,
					authorized,
				} = this.state;

				const {BASEURL} = getStartParams();

				const items = Object
					.keys(settings)
					.filter(key => extended || !~onlyForExtendedAccounts.indexOf(key))
					.map(key => ({
						key,
						value: settings[key],
						title: getTitleForKey(key),
						description: getDescriptionForKey(key),
						result: getTitleForValue(settings[key]),
					}));

				const relatedImage = (
					<img src={`${BASEURL}/assets/poster.png`} width="560" height="560"/>
				);

				return (
					<document>
						<head>
							<style content={`
								.grey_title {
									color: rgb(142, 147, 157);
								}

								.grey_text {
									color: rgb(84, 82, 80);
								}

								.item {
									background-color: rgba(255, 255, 255, 0.3);
									tv-highlight-color: rgba(255, 255, 255, 0.9);
								}

								@media tv-template and (tv-theme:dark) {
									.item {
										background-color: rgba(255, 255, 255, 0.05);
									}
								}

								.item_description {
									margin: 80 0 0; 
									text-align: center;
								}
							`} />
						</head>
						<listTemplate>
							<banner>
								<title class="grey_title">
									{i18n('settings-caption')}
								</title>
							</banner>
							<list>
								<relatedContent>
									<lockup>
										{relatedImage}
									</lockup>
								</relatedContent>
								<section>
									{items.map(({key, value, title, description, result}) => (
										<listItemLockup
											key={key}
											class="item"
											onSelect={this.onChangeOption.bind(this, key, value)}
										>
											<title>
												{title}
											</title>
											<decorationLabel>
												{result}
											</decorationLabel>
											{description && (
												<relatedContent>
													<lockup>
														{relatedImage}
														<description class="grey_text item_description">
															{description}
														</description>
													</lockup>
												</relatedContent>
											)}
										</listItemLockup>
									))}
								</section>
								<section>
									<header>
										<title>
											{i18n('settings-titles-network')}
										</title>
									</header>
									<listItemLockup
										class="item"
										onSelect={link('speedtest')}
										disabled={!(authorized && extended)}
									>
										<title>
											{i18n('settings-labels-speedtest')}
										</title>
									</listItemLockup>
								</section>
								<section>
									<header>
										<title>
											{i18n('settings-titles-about')}
										</title>
									</header>
									<listItemLockup disabled="true">
										<title>
											{i18n('settings-labels-version')}
										</title>
										<decorationLabel>{version}</decorationLabel>
									</listItemLockup>
								</section>
							</list>
						</listTemplate>
					</document>
				);
			},

			onChangeOption(key, active) {
				let values = settings.values[key]
				let options = Object
					.keys(values)
					.map(key => values[key])
					.map(value => ({
						value,
						isActive: value === active,
						title: getTitleForValue(value),
					}));

				TVDML
					.renderModal(
						<document>
							<alertTemplate>
								<title>
									{getTitleForKey(key)}
								</title>
								{options.map(({title, value, isActive}) => (
									<button 
										key={value}
										onSelect={this.onOptionSelect.bind(this, key, value)}
										autoHighlight={isActive || undefined}
									>
										<text>{title}</text>
									</button>
								))}
							</alertTemplate>
						</document>
					)
					.sink();
			},

			onOptionSelect(key, value) {
				settings.set(key, value);
				this.setState({settings: settings.getAll()});
				TVDML.removeModal();
			},
		})));
}

function getTitleForKey(key) {
	return i18n(titleMapping[key] || key);
}

function getDescriptionForKey(key) {
	return i18n(descriptionMapping[key]);
}

function getTitleForValue(key) {
	return i18n(valueMapping[key] || key);
}
