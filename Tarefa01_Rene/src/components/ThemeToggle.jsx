export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      Modo {theme === 'light' ? 'Escuro 🌙' : 'Claro ☀️'}
    </button>
  );
}
