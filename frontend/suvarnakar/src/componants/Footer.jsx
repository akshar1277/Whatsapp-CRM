import React from "react";

function Footer() {
  return (
    <>
      <footer className="shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 px-6 py-4">
        <div className="container-fluid">
          <div className="grid grid-cols-1">
            <div className="sm:text-start text-center mx-md-2">
              <p className="mb-0 text-slate-400">
                © <script>document.write(new Date().getFullYear())</script>{" "}
                Techwind. Design with{" "}
                <i className="mdi mdi-heart text-red-600"></i> by{" "}
                <a
                  href="https://shreethemes.in/"
                  target="_blank"
                  className="text-reset"
                >
                  Shreethemes
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
