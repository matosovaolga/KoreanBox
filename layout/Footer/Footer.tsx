import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import logo from './payment.png';

import { format } from 'date-fns';
import cn from 'classnames';

console.log(logo);
export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer {...props}
			className={cn(className)}
		>
			<div className={cn('grid_container', styles.footer_container, styles.top_footer_container)}>
				<div className={styles.top_footer}>
					<div>Col 1</div>
					<div>Col 2</div>
					<div>Col 3</div>
					<div>Col 4</div>
				</div>
			</div>
			<div className={cn('grid_container', styles.footer_container, styles.bottom_footer_container)}>
				<div className={styles.bottom_footer}>
					<p>Copyright &copy; {format(new Date(), 'yyyy')} by <a href="#" target="_blank">KoreanBeauty</a>. All rights reserved.</p>
					<img src={logo} alt="Logo" />
				</div>

			</div>
		</footer>
	);
};