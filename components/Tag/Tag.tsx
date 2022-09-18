import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ children, size = 's', href, className, ...props }: TagProps) => {
	return (
		<div className={cn(styles.tag, className, {
			[styles.s]: size == 's',
			[styles.m]: size == 'm'
		})}
			{...props}
		>
			{
				href
					?
					<a href={href} target='_blank'>{children}</a> : <>{children}</>
			}
		</div>
	);
};