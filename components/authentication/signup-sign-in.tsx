import {
	SignedOut,
	SignInButton,
	SignUpButton,
	SignedIn,
	UserButton,
} from '@clerk/nextjs';
import { Button } from '../ui/button';

function SignupSignin() {
	return (
		<header className='flex justify-end items-center p-4 gap-4 h-16'>
			<SignedOut>
				<SignInButton />
				<SignUpButton>
					<Button className='text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer'>
						Sign Up
					</Button>
				</SignUpButton>
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</header>
	);
}
export default SignupSignin;
