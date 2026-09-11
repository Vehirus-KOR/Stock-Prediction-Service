import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function Modal({ title, onClose, children, wide = false }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const dialog = dialogRef.current;
    const focused = document.activeElement;
    const scrollStyle = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = scrollStyle; focused?.focus({preventScroll:true}); };
  }, []);
  return <dialog className={`modal ${wide ? 'wide' : ''}`} ref={dialogRef} aria-labelledby="modal-title" onCancel={(event) => {event.preventDefault(); closeRef.current();}} onClick={(event) => { if(event.target === event.currentTarget) { const r=event.currentTarget.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) closeRef.current(); } }}><div className="modal-heading"><h2 id="modal-title">{title}</h2><button className="icon-button" autoFocus aria-label="창 닫기" onClick={onClose}><X size={20}/></button></div><div className="modal-body">{children}</div></dialog>;
}
