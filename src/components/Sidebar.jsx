import Link from "./Link";

function Sidebar() {
    const links = [
        {label: "Dropdown", path: '/'},
        {label: "Accordion", path: '/accordion'},
        {label: "Buttons", path: '/buttons'},
    ];

    const renderedLinks = links.map((link) => {
        // to prop is where navigation go to
        // className here is prop via Link.jsx
        return (
            <Link key={link.label} to={link.path} className="mb-3">
                {link.label}
            </Link>);
    });

  return (
    <div className="sticky top-0 overflow-y-scrolll flex flex-col">
        {renderedLinks}
    </div>
  )
}

export default Sidebar