import { FunctionComponent } from 'react';
import { ProductsLayoutProps } from './ProductsLayout.props';
import styles from './ProductsLayout.module.css';

import { Sidebar } from './Sidebar/Sidebar';

const ProductsLayout = ({ children }: ProductsLayoutProps): JSX.Element => {
	return (
		<>
			<Sidebar className={styles.sidebar} />

			<div className={styles.content}>
				{children}
			</div>

		</>
	);
};

export const withProductLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withProductLayoutComponent(props: T): JSX.Element {
		return (
			<ProductsLayout>
				<Component {...props} />
			</ProductsLayout>
		);
	};
};