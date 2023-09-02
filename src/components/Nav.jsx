"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
	const isLoggedIn = true
	const [providers, setProviders] = useState(null) 
  const [toggleDropdown, setToggleDropdown] = useState(false)
	useEffect(() => {
		const setProviders = async () => {
			const response = await getProviders()
		}
		setProviders()
	}, [])
	return (
		<nav className="flex-between w-full mb-16 pt-3">
			<Link href="/" className="flex gap-2 flex-center">
				<Image 
					src="/assets/images/logo.svg"
					width={37}
					height={37}
					alt="Eventually Logo"
				/>
				<p className="logo_text">Eventually</p>
			</Link>

			<div className="sm:flex hidden">
				{isLoggedIn ? (
					<div className="flex gap-3 md:gap-5">
						<Link 
							href="/dashboard" 
							className="magenta_btn"
						>
							Dashboard
						</Link>

						<button 
							type="button" 
							onClick={signOut} 
							className="outline_btn"
						>
							Sign Out
						</button>

						<Link href="/profile">
							<Image 
								src="/assets/images/profile.svg"
								width={37}
								height={37}
								className="rounded-full"
								alt="Profile"
							/> 
						</Link>
					</div>
				): (
					<>
						{ providers ?? 
							Object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									onClick={() => signIn(provider.id)}
									className="magenta_button"
								>
									Sign In
								</button>
							))
						}
					</>
				)}
			</div>

			<div className="sm:hidden flex relative">
				{isLoggedIn ? (
					<div className="flex">
						<Image 
							src="/assets/images/profile.svg"
							width={37}
							height={37}
							className="rounded-full"
							alt="Profile"
							onClick={() => setToggleDropdown((prev) => !prev)}
						/> 

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/dashboard"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Dashboard
                </Link>
                <button
                 type="button"
                 onClick={() => {
                  setToggleDropdown(false)
                  signOut()
                 }}
                 className="mt-5 w-full magenta_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
					</div>
				) : (
					<>
						{ providers ?? 
							Object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									onClick={() => signIn(provider.id)}
									className="magenta_button"
								>
									Sign In
								</button>
							))
						}
					</>
				)}
			</div>
		</nav>
	)
}

export default Nav