body {
  margin: 0;
  background: #0f0f0f;
  color: #00ffcc;
  font-family: 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  overflow: hidden;
  text-align: center;
}

.logo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  font-size: clamp(1.5rem, 8vw, 4rem);
  letter-spacing: 0.25rem;
  max-width: 100%;
  line-height: 1.2;
  padding: 0.5rem;
  gap: 0.5rem;
}

.word {
  display: inline-flex;
  flex-wrap: nowrap;
  white-space: pre;
  margin: 0 clamp(0.3rem, 2vw, 1rem);
  max-width: 100%;
}

.char {
  position: relative;
  padding: 0 0.1em;
  transition: color 0.2s ease;
  white-space: pre-wrap;
}

.controls {
  position: absolute;
  bottom: 2rem;
  display: flex;
  gap: 1rem;
  padding: 0 2rem;
  width: 100%;
  justify-content: center;
}

#editBtn,
#refreshBtn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: 'Courier New', monospace;
  background-color: #00ffcc;
  color: #0f0f0f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#editBtn:hover,
#refreshBtn:hover {
  background-color: #00ddb3;
}

.edit-modal {
  position: absolute;
  bottom: 6rem;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: #0f0f0f;
  padding: 1rem;
  border: 1px solid #00ffcc;
  border-radius: 6px;
  z-index: 20;
}

.edit-modal input {
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  padding: 0.5rem;
  width: 250px;
  background: #1a1a1a;
  color: #00ffcc;
  border: 1px solid #00ffcc;
  border-radius: 4px;
}

.edit-modal button {
  background-color: #00ffcc;
  color: #0f0f0f;
  border: none;
  padding: 0.5rem 1rem;
  font-family: 'Courier New', monospace;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 480px) {
  .logo {
    font-size: clamp(1.2rem, 10vw, 2.5rem);
    letter-spacing: 0.1rem;
    padding: 0 0.5rem;
  }

  .controls {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    bottom: 1rem;
  }
}
