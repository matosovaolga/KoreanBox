import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { withProductLayout } from '../layout/Products/ProductsLayout';

function Home(): JSX.Element {

	const [rating, setRating] = useState<number>(4);

	return (
		<>
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

			<Rating rating={rating} isEditable setRating={setRating} />
		</>
	);
}

export default withLayout(withProductLayout(Home));
