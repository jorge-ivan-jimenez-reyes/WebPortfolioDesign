// components/CustomGridComponent.tsx
import React from 'react';

const CustomGridComponent = () => {
    return (
        <div className="c-lesPJm c-lesPJm-iJSkFO-css">
            <div
                className="c-lesPJm c-lesPJm-ibQNNOD-css"
                style={{
                    opacity: 1,
                    transform: `translate(calc(-50% + var(--x)), calc(-50% + var(--y))) skewX(-48deg) skewY(14deg) scaleX(2) scale(0.3234375) rotate(var(--rotate)) translateZ(0)`,
                    // Custom CSS variables can be passed as properties too:
                    '--rotate': '0deg',
                    '--x': '0px',
                    '--y': '0px'
                } as React.CSSProperties}
            >
                <svg
                    letter=""
                    width="120"
                    height="240"
                    viewBox="0 0 42 84"
                    className="fade"
                    style={{
                        '--delay': '300ms',
                        gridColumn: '11 / 11',
                        gridRow: '16 / span 1'
                    } as React.CSSProperties}
                >
                    <path d="M21 0H0V84H19V56.8514C19 55.7469 19.8954 54.8514 21 54.8514C22.1046 54.8514 23 55.7469 23 56.8514V84H42V57.3659C42 49.4471 36.5181 42.84 29.2297 41.3097C36.7373 38.0305 42 30.4009 42 21.5122C42 9.63134 32.598 0 21 0Z" />
                </svg>

                <svg
                    letter=""
                    width="120"
                    height="240"
                    viewBox="0 0 42 84"
                    className="fade"
                    style={{
                        '--delay': '400ms',
                        gridColumn: '13 / 14',
                        gridRow: '18 / span 1'
                    } as React.CSSProperties}
                >
                    <path d="M21 0C9.40202 0 0 9.40202 0 21V84H19V42C19 40.8954 19.8954 40 21 40C22.1046 40 23 40.8954 23 42V84H42V21C42 9.40202 32.598 0 21 0Z" />
                </svg>

                {/* Additional SVGs, links, images, and video elements follow… */}
                <a
                    aria-label="/craft"
                    className="c-lesPJm c-lesPJm-ilkNoZM-css fade"
                    style={{
                        gridColumn: '16 / 18',
                        gridRow: '12 / span 2',
                        animationDelay: '0.7s',
                        '--shadow-default': '#193A3E55',
                        '--shadow-pressed': '#00132960'
                    } as React.CSSProperties}
                    href="/craft"
                >
                    <div className="c-lesPJm c-lesPJm-ibCHsTp-css">
                        <img
                            aria-hidden="true"
                            className="c-jSplNA"
                            style={{
                                filter: 'grayscale(1) blur(16px)',
                                transform: 'scale(1.2) translateZ(0)'
                            }}
                            src="data:image/png;base64,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"
                            alt=""
                        />
                        <video loop muted playsInline src="https://cdn.rauno.me/gooey-s.mp4#t=0.01" />
                    </div>
                </a>

                {/* Continue converting the rest of your markup.
            For example, you may have additional <a> elements and custom <grid> tags.
            If <grid> and <cell> are not defined as custom elements, consider replacing them with <div> or your own components.
        */}
            </div>

            {/* Example of custom grid elements.
          Replace <grid> with a standard element (such as <div>) or a custom component if needed.
      */}
            <div className="c-jsaqYj" />
            <div className="c-jsaqYj" />
            {/* ... more grid elements as needed ... */}
        </div>
    );
};

export default CustomGridComponent;
