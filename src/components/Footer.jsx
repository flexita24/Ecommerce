import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mb-0 text-center w-100 bg-body-secondary pt-5">
      <div className="d-flex align-items-center justify-content-center pb-5">
        <div className="col-md-6 ">
          <p className="mb-3 mb-md-0 d-flex gap-3 align-items-center justify-content-center ">
            Mode With ❤️ by{" "}
            <Link
              to="https://www.instagram.com/mehriniso_umidovna07/"
              target="_blank"
              className="text-decoration-none"
            >
              <IoLogoInstagram size={25} />
            </Link>
            <Link
              to="https://github.com/flexita24"
              className="text-decoration-none"
              target="_blank"
            >
              <FaGithub size={25} />: Flexita
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
