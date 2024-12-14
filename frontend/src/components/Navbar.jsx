import { Button, Navbar } from "flowbite-react";

export function MyNavbar() {
  return (
    <div className="drop-shadow-lg">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          {/* <img src={unicircleLogo} className="mr-3 h-6 sm:h-14" alt="logo" /> */}
          <span className="self-center whitespace-nowrap text-3xl font-semibold font-josefin dark:text-white sm:mx-10" >
            UniCircle
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 sm:mx-10 sm:space-x-2">
          <Button>Log in</Button>
          <Button>Sign up</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Store</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
