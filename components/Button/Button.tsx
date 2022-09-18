import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({ appearance, className, radius, children, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.secondary]: appearance == 'secondary',
				[styles.ghost]: appearance == 'ghost',
				[styles.rounded]: radius == 'rounded',
				[styles.circle]: radius == 'circle'
			})}
			{...props}

		>
			{children}

		</button>
	);
};