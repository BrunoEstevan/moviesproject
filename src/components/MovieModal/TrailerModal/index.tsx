'use client';

import { useEffect } from 'react';
import { Overlay, Dialog, Header, CloseBtn, VideoWrapper } from './styles';
import { FiX } from 'react-icons/fi';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  videoKey: string | null; // chave do YouTube (ex.: dQw4w9WgXcQ)
}

export default function TrailerModal({ isOpen, onClose, videoKey }: Props) {
  // fecha com ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoKey) return null;

  const src = `https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <Overlay onClick={onClose}>
      <Dialog onClick={(e) => e.stopPropagation()}>
        <Header>
          <CloseBtn onClick={onClose} aria-label="Fechar trailer">
            <FiX size={22} />
          </CloseBtn>
        </Header>
        <VideoWrapper>
          <iframe
            src={src}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </VideoWrapper>
      </Dialog>
    </Overlay>
  );
}