import { createPortal } from "react-dom";
import * as S from "./Toast.style";
import { useEffect, useState } from "react";

export const Toast = () => {
  const [toasts, setToasts] = useState([]);

  const onToast = (e) => {
    console.log(e.detail, e);
    setToasts((prev) => [...prev, e.detail]);
  };

  useEffect(() => {
    document.addEventListener("toast", onToast);

    return () => {
      document.removeEventListener("toast", onToast);
    };
  }, []);

  const onClose = () => {
    setToasts((prev) => prev.slice(1));
  };

  if (toasts.length == 0) return null;
  const item = toasts[0];
  return createPortal(
    <ToastItem item={item} onClose={onClose} />,
    document.getElementById("toast-root")
  );
};

const ToastItem = ({ item, onClose }) => {
  const { title, message } = item;
  const [isToasting, setIsToasting] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setIsToasting(true);
    setIsClosing(false);

    setTimeout(() => {
      setIsToasting(false);
      setIsClosing(true);
    }, 3000);
  }, [item]);

  useEffect(() => {
    if (!isClosing) return;

    setTimeout(() => {
      onClose();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosing]);

  return (
    <S.ToastContainer isToasting={isToasting}>
      <S.ToastTitle>{title}</S.ToastTitle>
      <S.ToastMessage>{message}</S.ToastMessage>
    </S.ToastContainer>
  );
};

export const showToast = (title, message) => {
  const event = new CustomEvent("toast", {
    bubbles: false,
    detail: {
      title,
      message,
    },
  });
  document.dispatchEvent(event);
};
