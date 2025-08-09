import { currentUser } from '@clerk/nextjs/server';
import { User2 } from 'lucide-react';
import Image from 'next/image';
async function UserIcon() {
	const user = await currentUser();
	const profileImage = user?.imageUrl;
	if (profileImage)
		return (
			<Image
				src={profileImage}
				width={150}
				height={150}
				alt='Image profile'
				className='size-6 rounded-full object-cover'
			/>
		);
	return (
		<div className='cursor-pointer'>
			<User2 className='size-6 bg-accent-foreground rounded-full text-white' />
		</div>
	);
}
export default UserIcon;
