# Sistema de Colores - Portfolio

## 🎨 Paleta de Colores

### Light Mode
- **Primary**: `#15253B` (azul oscuro original)
- **Background**: `#ffffff` (blanco)
- **Text Primary**: `#000000` (negro)
- **Accent**: `#15253B` (azul oscuro)

### Dark Mode
- **Primary**: `#3b82f6` (azul claro para contraste)
- **Background**: `#0f172a` (azul muy oscuro)
- **Text Primary**: `#ffffff` (blanco)
- **Accent**: `#3b82f6` (azul claro)

## 📋 Variables CSS Disponibles

### Colores Principales
```css
--background        /* Fondo principal */
--foreground        /* Color de primer plano */
--primary          /* Color primario */
--primary-light    /* Variante clara del primario */
--primary-dark     /* Variante oscura del primario */
```

### Colores de Texto
```css
--text-primary     /* Texto principal */
--text-secondary   /* Texto secundario */
--text-muted       /* Texto atenuado */
```

### Colores de Superficie
```css
--surface          /* Superficie principal */
--surface-secondary /* Superficie secundaria */
--surface-tertiary  /* Superficie terciaria */
```

### Colores de Borde
```css
--border           /* Borde principal */
--border-light     /* Borde claro */
```

### Colores de Acento
```css
--accent           /* Color de acento */
--accent-hover     /* Acento en hover */
```

### Efectos y Estados
```css
--grid-color       /* Color del grid de fondo */
--hover-bg         /* Fondo en hover */
--hover-border     /* Borde en hover */
```

## 🚀 Cómo Usar

### En CSS
```css
.mi-elemento {
  background-color: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border);
}
```

### En JSX con style
```jsx
<div style={{
  backgroundColor: 'var(--background)',
  color: 'var(--text-primary)',
  borderColor: 'var(--accent)'
}}>
  Contenido
</div>
```

### En componentes
```jsx
const MyComponent = () => (
  <div className="p-4" style={{ backgroundColor: 'var(--surface)' }}>
    <h1 style={{ color: 'var(--text-primary)' }}>Título</h1>
    <p style={{ color: 'var(--text-secondary)' }}>Descripción</p>
  </div>
);
```

## ✨ Beneficios

1. **Consistencia**: Todos los componentes usan los mismos colores
2. **Mantenibilidad**: Cambios centralizados en una sola ubicación
3. **Contraste Mejorado**: Dark mode con colores que contrastan mejor
4. **Flexibilidad**: Fácil cambio de paleta completa
5. **Accesibilidad**: Colores optimizados para legibilidad

## 🎯 Colores de Contraste para Dark Mode

- **Azul**: `#3b82f6` - Mejor contraste que el azul oscuro original
- **Grid**: Azul translúcido para mantener coherencia visual
- **Hover**: Estados más suaves y visibles 