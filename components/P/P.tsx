import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ children, size, className, ...props }: PProps): JSX.Element => {

	return (<p
		className={cn(styles.sm, className,
			{
				[styles.sm]: size == 'small',
				[styles.m]: size == 'medium',
			}
		)}
		{...props}>
		{children}
	</p>);
};