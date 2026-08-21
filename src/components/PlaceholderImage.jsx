import "./PlaceholderImage.css";

/**
 * Elegant gradient placeholder tile standing in for a real photograph.
 * Swap any of these out later by rendering an <img> in its place —
 * each usage is isolated to its parent component.
 */
export default function PlaceholderImage({ icon, label, tone = "gold", className = "" }) {
  return (
    <div className={`ph-image ph-image--${tone} ${className}`}>
      <div className="ph-image__pattern" />
      {icon && <span className="ph-image__icon">{icon}</span>}
      {label && <span className="ph-image__label">{label}</span>}
    </div>
  );
}
