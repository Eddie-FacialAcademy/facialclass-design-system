// Facial Class Design System — Button
// Desenvolvido por Edegar Junior.
// Code Component para Framer (também funciona em React puro).
// As cores usam as CSS variables do design system com fallback para o brand,
// então o botão acompanha o tema (dark/light) se o site carregar os tokens.

import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Button(props) {
    const {
        label = "Assinar a Facial Class",
        variant = "fill",
        size = "md",
        showIcon = true,
        iconPosition = "right",
        link = "",
        newTab = false,
        disabled = false,
        style,
    } = props

    const sizes = {
        sm: { fontSize: 13, padding: "10px 18px", gap: 7, ico: 15 },
        md: { fontSize: 15, padding: "14px 26px", gap: 9, ico: 18 },
        lg: { fontSize: 16, padding: "17px 32px", gap: 9, ico: 19 },
    }
    const s = sizes[size] || sizes.md

    const variants: Record<string, React.CSSProperties> = {
        fill: {
            background:
                "var(--cta-grad,linear-gradient(120deg,#7C5EA7,#6E51A0))",
            color: "var(--cta-ink,#fff)",
            boxShadow: "0 10px 30px var(--sh,rgba(124,94,167,.40))",
        },
        solid: {
            background: "var(--cta-solid,#644389)",
            color: "var(--cta-ink,#fff)",
        },
        outline: {
            background: "transparent",
            color: "var(--txt,#F9F8FD)",
            border: "1px solid var(--line,rgba(162,137,215,.14))",
        },
        ghost: { background: "transparent", color: "var(--lilas,#A289D7)" },
    }

    const base: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: iconPosition === "left" ? "row-reverse" : "row",
        gap: s.gap,
        fontFamily:
            "'Silka',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif",
        fontSize: s.fontSize,
        fontWeight: 600,
        lineHeight: 1,
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        textDecoration: "none",
        borderRadius: variant === "ghost" ? 8 : 30,
        padding: variant === "ghost" ? "10px 14px" : s.padding,
        minHeight: 44,
        whiteSpace: "nowrap",
        transition: "transform .2s cubic-bezier(.2,.8,.2,1), box-shadow .2s",
        opacity: disabled ? 0.42 : 1,
        pointerEvents: disabled ? "none" : "auto",
        ...variants[variant],
        ...style,
    }

    const Arrow = (
        <svg
            width={s.ico}
            height={s.ico}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flex: "0 0 auto" }}
            aria-hidden="true"
        >
            <path d="M4 12h15M13 6l6 6-6 6" />
        </svg>
    )

    const content = (
        <>
            <span>{label}</span>
            {showIcon && Arrow}
        </>
    )

    // Hover do CTA sólido: clareia para --cta-solid-h (#6E51A0 no tema escuro).
    const hoverHandlers =
        variant === "solid" && !disabled
            ? {
                  onMouseEnter: (e) => {
                      e.currentTarget.style.background =
                          "var(--cta-solid-h,#6E51A0)"
                  },
                  onMouseLeave: (e) => {
                      e.currentTarget.style.background =
                          "var(--cta-solid,#644389)"
                  },
              }
            : {}

    if (link && !disabled) {
        return (
            <a
                href={link}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noopener noreferrer" : undefined}
                style={base}
                {...hoverHandlers}
            >
                {content}
            </a>
        )
    }
    return (
        <button
            type="button"
            style={base}
            disabled={disabled}
            {...hoverHandlers}
        >
            {content}
        </button>
    )
}

addPropertyControls(Button, {
    label: { type: ControlType.String, title: "Texto", defaultValue: "Assinar a Facial Class" },
    variant: {
        type: ControlType.Enum,
        title: "Variante",
        options: ["fill", "solid", "outline", "ghost"],
        optionTitles: ["Preenchido", "Sólido", "Contorno", "Inline"],
        defaultValue: "fill",
    },
    size: {
        type: ControlType.Enum,
        title: "Tamanho",
        options: ["sm", "md", "lg"],
        optionTitles: ["Small", "Medium", "Large"],
        defaultValue: "md",
        displaySegmentedControl: true,
    },
    showIcon: { type: ControlType.Boolean, title: "Ícone", defaultValue: true },
    iconPosition: {
        type: ControlType.Enum,
        title: "Posição do ícone",
        options: ["left", "right"],
        optionTitles: ["Esquerda", "Direita"],
        defaultValue: "right",
        displaySegmentedControl: true,
        hidden: (p) => !p.showIcon,
    },
    link: { type: ControlType.Link, title: "Link" },
    newTab: { type: ControlType.Boolean, title: "Nova aba", defaultValue: false, hidden: (p) => !p.link },
    disabled: { type: ControlType.Boolean, title: "Desabilitado", defaultValue: false },
})
