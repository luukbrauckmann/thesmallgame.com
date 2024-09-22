import { site } from '@data';
import Styles from './LocaleSelector.module.scss';

export default function LocalSelector() {
	return (
		<ul className={Styles['locale-list']}>
			{site.locales.map((locale) => (
				<li
					key={locale}
					className={Styles.li}
				>
					<a
						className={Styles['locale-list__link']}
						href={`/${locale}/`}
					>
						{locale}
					</a>
				</li>
			))}
		</ul>
	);
}
