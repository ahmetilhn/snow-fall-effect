declare class SnowFall {
    constructor();
    get cordinate(): {
        left: number;
        top: number;
    };
    get width(): number;
    get icon(): string;
    get commonCSS(): string;
    injectCommonCSS: () => void;
    get styles(): {
        svg: string;
        subContainer: string;
    };
    createContainer: () => void;
    get container(): HTMLDivElement;
    inner: () => void;
    makeItRain: () => void;
    init: () => void;
}
export default SnowFall;
