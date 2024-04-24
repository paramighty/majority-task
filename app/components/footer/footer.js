import majorityLogo from "/public/images/Majority_white.webp";
import Image from "next/image";
import facebookIcon from "/public/icons/facebookIcon.webp";
import instagramIcon from "/public/icons/InstagramIcon.webp";
import twitterIcon from "/public/icons/twitterIcon.webp";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-900 sticky top-[100vh] -z-0">
			<div className="mx-auto w-full max-w-screen-xl">
				<div className="flex flex-col md:flex-row p-4">
					<div className="content-center min-w-[50%]">
						<Image src={majorityLogo} height={300} width={300} />
					</div>
					<div className="flex flex-row min-w-[50%] justify-around py-4">
						<div>
							<p className="p mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								App
							</p>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4 small">
									<a href="#" className=" hover:underline">
										Membership
									</a>
								</li>
								<li className="mb-4 small">
									<a href="#" className="hover:underline">
										Help Center
									</a>
								</li>
								<li className="mb-4 small">
									<a href="#" className="hover:underline">
										Community
									</a>
								</li>
							</ul>
						</div>
						<div>
							<p className="p mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
								About
							</p>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4 small">
									<a href="#" className="hover:underline">
										Company
									</a>
								</li>
								<li className="mb-4 small">
									<a href="#" className="hover:underline">
										Careers
									</a>
								</li>
								<li className="mb-4 small">
									<a href="#" className="hover:underline">
										Press
									</a>
								</li>
								<li className="mb-4 small">
									<a href="#" className="hover:underline">
										Legal
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="px-4 py-6 md:flex md:items-center md:justify-between">
					<div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
						<Link href="#">
							<Image
								src={facebookIcon}
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
							/>
						</Link>
						<Link href="#">
							<Image
								src={instagramIcon}
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
							/>
						</Link>
						<Link href="#">
							<Image
								src={twitterIcon}
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
