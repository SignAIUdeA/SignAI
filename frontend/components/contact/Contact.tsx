import Link from "next/link";
import style from "./contact.module.css";

const Contact = ({ className = "text-[#fff] after:bg-[#fff]" }) => {
  return (
    <Link className={`${className} ${style.Contact}`} href={"/"}>
      Contáctanos
    </Link>
  );
};

export default Contact;
