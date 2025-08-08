import ProductsContainer from '@/components/products/ProductsContainer';

export default async function ProductsPage({
	searchParams,
}: {
	searchParams: Promise<Record<string, string | undefined>>;
}) {
	const params = await searchParams; // Await here

	const layout = params.layout ?? 'grid';
	const search = params.search ?? '';

	return (
		<>
			<ProductsContainer layout={layout} search={search} />
		</>
	);
}
