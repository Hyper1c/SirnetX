import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Plataforma',
      links: [
        { name: 'Acerca de', href: '/about' },
        { name: 'Cómo funciona', href: '/how-it-works' },
        { name: 'Precios', href: '/pricing' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Centro de ayuda', href: '/help' },
        { name: 'Contacto', href: '/contact' },
        { name: 'API', href: '/api' },
        { name: 'Estado del servicio', href: '/status' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos de uso', href: '/terms' },
        { name: 'Política de privacidad', href: '/privacy' },
        { name: 'Cookies', href: '/cookies' },
        { name: 'DMCA', href: '/dmca' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                <Film className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Nuplin</span>
                <div className="text-sm text-gray-400">Movie Tips Platform</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              La plataforma líder para descubrir, compartir y explorar los mejores consejos cinematográficos. 
              Únete a nuestra comunidad de cinéfilos apasionados.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contacto@nuplin.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nuplin. Todos los derechos reservados.</p>
          <p className="mt-2">
            Hecho con ❤️ para la comunidad cinematográfica
          </p>
        </div>
      </div>
    </footer>
  );
};