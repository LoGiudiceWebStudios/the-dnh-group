import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import '../../global-styles.scss';
export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __(
				'Copyright Date Block – hello from the editor!',
				'copyright-date-block'
			) }
		</p>
	);
}
