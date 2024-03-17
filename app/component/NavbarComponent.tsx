
import {Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";
import Link from "next/link";

function NavbarComponent() {
  return (

            <header className=" bg-blue-600 py-2 px-4">
                <Navbar className="container ml-0 bg-blue-600">
                    <NavbarToggle className="text-white border-0 sm:left-0 delay-75"/>
                    <NavbarBrand as={Link} href="/">
                        <img src="https://istad.co/resources/img/logo_md.png" className="mr-3 h-8"
                             alt="Flowbite React Logo"/>
                        <span
                            className="self-center whitespace-nowrap text-2xl font-bold text-white tracking-[.25em]">CSTAD</span>
                    </NavbarBrand>
                    <NavbarCollapse className="text-xl">
                        <NavbarLink href="/" className="text-lg text-white hover:text-[]  lg:hover:text-white">
                            Home
                        </NavbarLink>
                        <NavbarLink href="/enroll"
                                    className="text-lg text-white hover:text-primary lg:hover:text-white">
                            Enroll
                        </NavbarLink>
                        <NavbarLink href="/course"
                                    className="text-lg text-white hover:text-primary lg:hover:text-white">Course</NavbarLink>
                        <NavbarLink href="/itnews"
                                    className="text-lg text-white hover:text-primary lg:hover:text-white">IT
                            News</NavbarLink>
                        <NavbarLink href="/job" className="text-lg text-white hover:text-primary lg:hover:text-white">Job
                            Opportunity</NavbarLink>
                        <NavbarLink href="/aboutUS"
                                    className="text-lg text-white hover: ">About
                            Us</NavbarLink>
                    </NavbarCollapse>
                </Navbar>
            </header>
  );
}



export default NavbarComponent;