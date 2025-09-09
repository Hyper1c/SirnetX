import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';
import bgImage from '../../Pelis/SirNet.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetMode, setResetMode] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  const { login, resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (resetMode) {
      try {
        setError('');
        setLoading(true);
        await resetPassword(email);
        setResetMessage('Revisa tu email para restablecer tu contraseña');
      } catch (error: any) {
        setError('Error al enviar email de recuperación');
      }
      setLoading(false);
      return;
    }

    try {
      setError('');
      setLoading(true);
      await login(email, password);
    } catch (error: any) {
      setError('Email o contraseña incorrectos');
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Sir<span className="text-blue-500">Net</span>
            </h1>
            <p className="text-gray-400">Tu plataforma de streaming</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center gap-2 text-red-400">
                <AlertCircle size={16} />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {resetMessage && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-green-400 text-sm">
                {resetMessage}
              </div>
            )}

            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              {!resetMode && (
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {resetMode ? 'Enviando...' : 'Iniciando sesión...'}
                </div>
              ) : (
                resetMode ? 'Enviar email de recuperación' : 'Iniciar sesión'
              )}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setResetMode(!resetMode);
                  setError('');
                  setResetMessage('');
                }}
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                {resetMode ? 'Volver al login' : '¿Olvidaste tu contraseña?'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;