import { HeroProps } from './Hero.props';

export const Hero = ({ ...props }: HeroProps): JSX.Element => {
	return (
		<div {...props}>Hero</div>
	);
};