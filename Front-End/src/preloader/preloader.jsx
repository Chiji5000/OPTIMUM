import React, { useEffect, useState } from "react";
import "./preloader.css";

const Preloader = ({ isLoading, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsFading(true);
      const timer = setTimeout(() => {
        onLoadingComplete?.();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      setIsFading(false);
      
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.floor(Math.random() * 3) + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (!isLoading && isFading) return null;

  return (
    <div className={`preloader-overlay ${isFading ? "fade-out" : ""}`}>
      <div className="preloader-container">
        <div className="preloader-3d-scene">
          {/* 3D Shopping Boxes */}
          <div className="shopping-box box-1">
            <div className="box-face front">🛍️</div>
            <div className="box-face back">OPTIMUM</div>
            <div className="box-face side-1">$</div>
            <div className="box-face side-2">%</div>
            <div className="box-face top">🚚</div>
            <div className="box-face bottom">⭐</div>
          </div>

          <div className="shopping-box box-2">
            <div className="box-face front">🛒</div>
            <div className="box-face back">SHOP</div>
            <div className="box-face side-1">SALE</div>
            <div className="box-face side-2">DEAL</div>
            <div className="box-face top">❤️</div>
            <div className="box-face bottom">🔥</div>
          </div>

          <div className="shopping-box box-3">
            <div className="box-face front">💳</div>
            <div className="box-face back">PAY</div>
            <div className="box-face side-1">✓</div>
            <div className="box-face side-2">✓</div>
            <div className="box-face top">✓</div>
            <div className="box-face bottom">✓</div>
          </div>

          {/* Floating Shopping Elements */}
          <div className="floating-elements">
            <div className="float-item item-1">👕</div>
            <div className="float-item item-2">👟</div>
            <div className="float-item item-3">💎</div>
            <div className="float-item item-4">📱</div>
            <div className="float-item item-5">💻</div>
            <div className="float-item item-6">👜</div>
          </div>
        </div>

        <div className="preloader-content">
          <div className="preloader-brand">OPTIMUM</div>
          <div className="preloader-tagline">Excellence in Every Exchange</div>
          
          <div className="preloader-progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              >
                <div className="progress-glow"></div>
              </div>
            </div>
            <div className="progress-text">{progress}%</div>
          </div>

          <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;