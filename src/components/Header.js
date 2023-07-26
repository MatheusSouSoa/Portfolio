import React from 'react';
import Logo from '../assets/LogoSite.png'
import { FiDownload } from 'react-icons/fi'

const PDF_FILE_URL = "http://localhost:3000/Curriculo_Matheus.pdf";

const Header = () => {

  const downloadFileAtUrl=(url) => {
    const fileName = url.split("/").pop()
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="https://www.linkedin.com/in/matheussouzasoares/">
            <img src={Logo} alt="" width={200} />
          </a>
          <a>
            <button 
              className="flex items-center gap-x-2 px-4 py-4 btn btn-sm mb-5"
              onClick={() => {downloadFileAtUrl(PDF_FILE_URL)}}
              >
              Currículo
              <FiDownload size={30} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
