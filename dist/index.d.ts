declare class SnowFall {
    constructor();
    get cordinate(): {
        left: number;
        top: number;
    };
    get width(): number;
    get icon(): string;
    get style(): string;
    createContainer: () => HTMLDivElement;
    get container(): HTMLDivElement;
    inner: () => void;
    makeItRain: () => void;
    init: () => void;
}
export default SnowFall;
