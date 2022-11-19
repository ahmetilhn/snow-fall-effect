declare class SnowFall {
    constructor();
    get cordinate(): number;
    get icon(): string;
    inner: () => void;
    makeItRain: () => void;
    init: () => void;
}
export default SnowFall;
