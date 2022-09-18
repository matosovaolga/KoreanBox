import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {

	return (
		<div>
			<Htag tag='h1'>Text</Htag>
			<Htag tag='h2'>Text</Htag>
			<Htag tag='h3'>Text</Htag>
			<Htag tag='h4'><a href="">Text</a></Htag>
			<Button appearance='primary'>Default</Button>
			<Button appearance='primary' radius='rounded' className='BIG'>Rounded</Button>
			<Button appearance='secondary'>Secondary</Button>
			<Button appearance='secondary' radius='circle' >Secondary Circle</Button>
			<Button appearance='ghost'>ghost</Button>
			<Button appearance='ghost' radius='circle'>ghost</Button>

			<P size='small'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque eros. Nullam malesuada erat</P>
			<P size='medium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque eros. Nullam malesuada erat</P>

			<Tag size='m' href='index.html'>SomeText</Tag>
		</div>
	);
}
