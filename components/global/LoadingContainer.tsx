import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

function LoadingContainer() {
	return (
		<div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
			<LoadingProduct />
			<LoadingProduct />
			<LoadingProduct />
		</div>
	);
}

function LoadingProduct() {
	return (
		<Card className='transform transition-shadow duration-500'>
			<CardContent className='p-4'>
				<div className='relative h-64 md:h-48 rounded overflow-hidden'>
					<Skeleton className='h-full w-full' />
				</div>
				<Skeleton className='h-4 w-3/4 mt-4' />
				<Skeleton className='h-4 w-1/2 mt-2' />
			</CardContent>
		</Card>
	);
}

export default LoadingContainer;
