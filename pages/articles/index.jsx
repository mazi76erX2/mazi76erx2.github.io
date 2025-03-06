import Recent from '../../components/sections/articles/recent'
import Color from '../../components/utils/page.colors.util'

import colors from '../../content/articles/_colors.json'
import settings	from '../../content/_settings.json'

//
export default function Articles({ mediumArticles }) {
	return (
		<>
			<Color colors={colors} />
			<Recent mediumArticles={mediumArticles}/>
		</>
	)
}