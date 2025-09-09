import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = '', size = 16 }) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'film': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
      </svg>
    ),
    'baby': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12 2C13.1 2 14 2.9 14 4s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm8.5 8.5c-.3-.3-.8-.3-1.1 0L18 12.5l-1.4-1.4c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l2 2c.3.3.8.3 1.1 0l2-2c.3-.3.3-.8 0-1.1zM6.5 10.5c-.3-.3-.8-.3-1.1 0L4 12.5l-1.4-1.4c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l2 2c.3.3.8.3 1.1 0l2-2c.3-.3.3-.8 0-1.1zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/>
      </svg>
    ),
    'tv': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
      </svg>
    ),
    'child': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12 2C13.1 2 14 2.9 14 4s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 18v-6h2v6h2v-8c0-1.1-.9-2-2-2h-2.5c-.6 0-1.1.3-1.4.8l-1.5 2.5c-.3.5-.8.8-1.4.8H8c-.6 0-1.1-.3-1.4-.8l-1.5-2.5c-.3-.5-.8-.8-1.4-.8H2c-1.1 0-2 .9-2 2v8h2v-6h2v6h2v-6h2v6h2v-6h2v6h2z"/>
      </svg>
    ),
    'futbol': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1.08-1.36-1.9-1.36h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    'compass': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v10z"/>
      </svg>
    ),
    'magic': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M7.5 5.6L5 7 6.4 4.5 5 2l2.5 1.4L10 2 8.6 4.5 10 7 7.5 5.6zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14l-2.5 1.4zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5L22 2zM9 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
      </svg>
    ),
    'laugh': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <path d="M15.5 11c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/>
        <path d="M8.5 11c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"/>
        <path d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
      </svg>
    ),
    'users': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2v6h-2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM20 10c0-.83-.67-1.5-1.5-1.5S17 9.17 17 10s.67 1.5 1.5 1.5S20 10.83 20 10z"/>
        <path d="M7 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM9 11.5c.83 0 1.5-.67 1.5-1.5S9.83 8.5 9 8.5 7.5 9.17 7.5 10s.67 1.5 1.5 1.5z"/>
        <path d="M4 18v-6h2v6H4z"/>
      </svg>
    ),
    'star': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ),
    'dragon': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        <path d="M12 9l-3 3 3 3 3-3-3-3z"/>
      </svg>
    ),
    'home': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    'theater-masks': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
      </svg>
    ),
    'car': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
    'music': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    ),
    'globe': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1.08-1.36-1.9-1.36h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    'utensils': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
      </svg>
    ),
    'search': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    ),
    'play': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M8 5v14l11-7z"/>
      </svg>
    ),
    'flag': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
      </svg>
    ),
    'newspaper': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
      </svg>
    ),
    'basketball-ball': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1.08-1.36-1.9-1.36h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    'trophy': (
      <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5V7C21 8.66 19.66 10 18 10H6C4.34 10 3 8.66 3 7V5C3 4.45 3.45 4 4 4H7ZM9 3V4H15V3H9ZM5 6V7C5 7.55 5.45 8 6 8H18C18.55 8 19 7.55 19 7V6H5ZM7 12H17V14H7V12Z"/>
      </svg>
    ),
  };

  const icon = iconMap[name] || (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v10z"/>
    </svg>
  );

  return <span className={className}>{icon}</span>;
};

export default Icon;
