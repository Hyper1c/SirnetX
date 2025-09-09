import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Github, Facebook } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      if (isSignUp) {
        await signUp(formData.email, formData.password, formData.name);
      } else {
        await signIn(formData.email, formData.password);
      }
      onClose();
    } catch (error: any) {
      setErrors({ submit: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialIcons = [
    { icon: <Github size={20} />, name: 'GitHub', color: 'bg-gray-800' },
    { icon: <Facebook size={20} />, name: 'Facebook', color: 'bg-blue-600' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X size={24} />
            </button>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-8 text-white text-center">
                <motion.h2
                  key={isSignUp ? 'signup' : 'signin'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold mb-2"
                >
                  {isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión'}
                </motion.h2>
                <p className="text-purple-100">
                  {isSignUp 
                    ? 'Únete a nuestra comunidad de cinéfilos'
                    : 'Bienvenido de vuelta'
                  }
                </p>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <AnimatePresence mode="wait">
                    {isSignUp && (
                      <motion.div
                        key="name"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Input
                          type="text"
                          name="name"
                          placeholder="Tu nombre completo"
                          value={formData.name}
                          onChange={handleInputChange}
                          leftIcon={<User size={16} />}
                          required={isSignUp}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Input
                    type="email"
                    name="email"
                    placeholder="ejemplo@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    leftIcon={<Mail size={16} />}
                    required
                  />

                  <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleInputChange}
                    leftIcon={<Lock size={16} />}
                    required
                  />

                  {errors.submit && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
                    >
                      {errors.submit}
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    isLoading={isLoading}
                  >
                    {isSignUp ? 'Crear Cuenta' : 'Iniciar Sesión'}
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">O continúa con</span>
                    </div>
                  </div>

                  <div className="mt-4 flex space-x-3">
                    {socialIcons.map((social, index) => (
                      <motion.button
                        key={social.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 ${social.color} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}
                      >
                        {social.icon}
                        <span className="text-sm font-medium">{social.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    {isSignUp ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
                    <button
                      type="button"
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="ml-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                    >
                      {isSignUp ? 'Iniciar Sesión' : 'Crear Cuenta'}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};