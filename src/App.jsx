
import logo from './assets/logo.jpg';
import loja from './assets/loja.png';
// --- Ícones como Componentes React para melhor organização ---


const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mx-auto"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42-.14 0-.3 0-.46 0-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.76 2.68 4.26 3.76.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"></path></svg>
);


// --- Componente de Link reutilizável ---
const LinkButton = ({ href, icon, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center w-full p-4 bg-black border border-white rounded-lg hover:bg-gray-900 transition-colors duration-300">
    <div className="flex-shrink-0 w-8 text-center">
      {icon}
    </div>
    <span className="flex-grow text-center font-semibold">{text}</span>
  </a>
);


function App() {
  const links = [
    { href: "https://br.shp.ee/METiydR", icon: <img src={loja} alt="Ícone do site" className="w-6 h-6 mx-auto rounded-sm" />, text: "Nossa Loja" },
    { href: "https://www.instagram.com/rc_importados02?igsh=MXV0ZTB4am9sMmF2aw==", icon: <InstagramIcon />, text: "Instagram" },
    { href: "https://wa.me/message/WUDCINQS5UBXN1", icon: <WhatsAppIcon />, text: "Contato WhatsApp" }
  ];

  return (
    // O ideal é que as classes do body estejam no seu arquivo CSS global (ex: index.css)
    // <body class="bg-black text-white min-h-screen flex flex-col items-center p-4">
    // Mas para manter tudo em um componente, usaremos um div principal com estilo similar.
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4 font-['Inter',_sans-serif]">

      {/* Container principal com largura máxima */}
      <div className="w-full max-w-md mx-auto">

        {/* Cabeçalho com Logo e Títulos */}
        <header className="text-center py-8">
          <img src={logo} alt="Logo RC Importados" className="w-20 h-20 mx-auto mb-6 rounded-md" />
          <h1 className="text-2xl font-bold">RC Importados</h1>
          <p className="text-gray-300 mt-2">Confira nossa seleção de produtos de alta qualidade!</p>
        </header>

        {/* Seção de Links */}
        <main className="flex flex-col space-y-4">
          {links.map((link, index) => (
            <LinkButton key={index} href={link.href} icon={link.icon} text={link.text} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
