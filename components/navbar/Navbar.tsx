import { Suspense } from 'react';
import Container from '../global/Container';
import CartButton from './CartButton';
import { DarkMode } from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';
import UserIcon from './UserIcon';
import { SignIn } from '@clerk/nextjs';

function Navbar() {
	return (
		<nav className='border-b'>
			<Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
				<div className='flex items-center justify-between w-full sm:w-auto'>
					<Logo />
					{/* Show links mobile */}
					<div className=' sm:hidden'>
						<LinksDropdown />
					</div>
				</div>

				<div className='flex gap-4 items-center w-full sm:w-auto justify-end'>
					<Suspense>
						<NavSearch />
					</Suspense>
					<CartButton />
					<DarkMode />

					{/* Show links here on desktop */}
					<div className='hidden sm:block'>
						<LinksDropdown />
					</div>
				</div>
			</Container>
		</nav>
	);
}

export default Navbar;
