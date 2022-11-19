import { getRandomArbitrary } from "./utils/random.util.js";
var SnowFall = /** @class */ (function () {
    function SnowFall() {
        var _this = this;
        this.createContainer = function () {
            var div = document.createElement("div");
            div.classList.add("snow-fall-container");
            document.body.appendChild(div);
            return div;
        };
        this.inner = function () {
            //@ts-ignore
            _this.container.innerHTML += _this.icon;
        };
        this.makeItRain = function () {
            setInterval(function () {
                _this.inner();
            }, 1000);
        };
        this.init = function () {
            _this.createContainer();
            _this.makeItRain();
        };
        this.init();
    }
    Object.defineProperty(SnowFall.prototype, "cordinate", {
        get: function () {
            var innerHeight = window.innerHeight, innerWidth = window.innerWidth;
            return {
                left: getRandomArbitrary(0, innerHeight),
                top: getRandomArbitrary(0, innerWidth),
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnowFall.prototype, "width", {
        get: function () {
            return getRandomArbitrary(10, 20);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnowFall.prototype, "icon", {
        get: function () {
            return "<svg style=\"".concat(this.style, "\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n    <g>\n        <g>\n            <path d=\"M495.933,239.933c-6.28,0-11.782,3.447-14.746,8.533H456.68l17.691-17.691c1.436,0.395,2.939,0.624,4.496,0.624    c9.387,0,17.067-7.68,17.067-17.067c0-9.387-7.68-17.067-17.067-17.067s-17.067,7.68-17.067,17.067    c0,1.557,0.229,3.06,0.624,4.496l-29.638,29.638H410.6v-5.12l14.507-14.507c3.413-3.413,3.413-8.533,0-11.947    s-8.533-3.413-11.947,0L397.553,232.5c-2.509,1.395-4.02,4.034-4.02,7.433v8.533H354.28l9.158-9.158    c1.436,0.395,2.939,0.624,4.496,0.624c9.387,0,17.067-7.68,17.067-17.067c0-9.387-7.68-17.067-17.067-17.067    s-17.067,7.68-17.067,17.067c0,1.557,0.229,3.06,0.624,4.496l-21.104,21.104H307.47c-1.32-7.779-4.409-14.971-8.837-21.153    l12.98-12.98h30.72c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533H328.68l26.453-26.453l5.366,5.366    c1.395,2.509,4.034,4.02,7.434,4.02H385c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-13.653l-4.267-4.267l12.8-12.8    h42.557c0.731,1.201,1.608,2.352,2.669,3.413c6.827,6.827,17.067,6.827,23.893,0s6.827-17.067,0-23.893s-17.067-6.827-23.893,0    c-1.062,1.062-1.938,2.212-2.669,3.413h-25.491l26.248-26.248c5.627,1.627,11.802,0.144,16.419-4.472    c6.827-6.827,6.827-17.067,0-23.893s-17.067-6.827-23.893,0c-4.616,4.616-6.099,10.792-4.472,16.419L385,117.053V92.067    c1.515-0.808,2.955-1.862,4.267-3.174c6.827-5.973,6.827-17.067,0-23.893s-17.067-6.827-23.893,0s-6.827,17.067,0,23.893    c0.808,0.808,1.667,1.513,2.56,2.13v43.097l-12.8,12.8l-4.267-4.267V129c0-5.12-3.413-8.533-8.533-8.533    c-5.12,0-8.533,3.413-8.533,8.533v17.067c0,3.399,1.511,6.038,4.02,7.434l5.367,5.367l-26.453,26.453v-13.653    c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v30.72l-12.98,12.98c-6.182-4.428-13.374-7.517-21.153-8.837v-22.917    l21.104-21.104c1.436,0.395,2.939,0.624,4.496,0.624c9.387,0,17.067-7.68,17.067-17.067c0-9.387-7.68-17.067-17.067-17.067    s-17.067,7.68-17.067,17.067c0,1.557,0.229,3.06,0.624,4.496l-9.158,9.158v-47.787h8.533c3.399,0,6.038-1.511,7.433-4.02    l15.607-15.607c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0l-14.507,14.507h-5.12V81.213l29.638-29.638    c1.436,0.395,2.939,0.624,4.496,0.624c9.387,0,17.067-7.68,17.067-17.067c0-9.387-7.68-17.067-17.067-17.067    S282.6,25.747,282.6,35.133c0,1.557,0.229,3.06,0.624,4.495L265.533,57.32V32.812c5.087-2.963,8.533-8.466,8.533-14.746    C274.067,8.68,266.387,1,257,1s-17.067,7.68-17.067,17.067c0,6.28,3.447,11.782,8.533,14.746V57.32l-17.691-17.691    c0.395-1.436,0.624-2.939,0.624-4.496c0-9.387-7.68-17.067-17.067-17.067c-9.387,0-17.067,7.68-17.067,17.067    c0,9.387,7.68,17.067,17.067,17.067c1.557,0,3.06-0.229,4.496-0.624l29.638,29.638v13.653h-5.12L228.84,80.36    c-3.413-3.413-8.533-3.413-11.947,0s-3.413,8.533,0,11.947l15.607,15.607c1.395,2.509,4.034,4.02,7.434,4.02h8.533v47.787    l-9.158-9.158c0.395-1.436,0.624-2.939,0.624-4.496c0-9.387-7.68-17.067-17.067-17.067c-9.387,0-17.067,7.68-17.067,17.067    c0,9.387,7.68,17.067,17.067,17.067c1.557,0,3.06-0.229,4.496-0.624l21.104,21.104v22.917c-7.779,1.32-14.971,4.409-21.153,8.837    l-12.98-12.98v-30.72c0-5.12-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533v13.653l-26.453-26.453l5.366-5.366    c2.509-1.395,4.02-4.034,4.02-7.434V129c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v13.653l-4.267,4.267l-12.8-12.8    V92.546c5.087-2.963,8.533-8.466,8.533-14.746c0-9.387-7.68-17.067-17.067-17.067s-17.067,7.68-17.067,17.067    c0,6.28,3.447,11.782,8.533,14.746v24.508l-26.248-26.248c1.627-5.627,0.144-11.802-4.472-16.419    c-6.827-6.827-17.067-6.827-23.893,0s-6.827,17.067,0,23.893c4.616,4.616,10.792,6.099,16.419,4.472L117.053,129H92.416    c-0.731-1.201-1.608-2.352-2.669-3.413c-6.827-6.827-17.067-6.827-23.893,0s-6.827,17.067,0,23.893s17.067,6.827,23.893,0    c1.062-1.062,1.938-2.212,2.669-3.413h41.704l12.8,12.8l-4.267,4.267H129c-5.12,0-8.533,3.413-8.533,8.533S123.88,180.2,129,180.2    h17.067c3.399,0,6.038-1.511,7.434-4.02l5.366-5.366l26.453,26.453h-13.653c-5.12,0-8.533,3.413-8.533,8.533    c0,5.12,3.413,8.533,8.533,8.533h30.72l12.98,12.98c-4.428,6.182-7.517,13.374-8.837,21.153h-22.917l-21.104-21.104    c0.395-1.436,0.624-2.939,0.624-4.496c0-9.387-7.68-17.067-17.067-17.067c-9.387,0-17.067,7.68-17.067,17.067    c0,9.387,7.68,17.067,17.067,17.067c1.557,0,3.06-0.229,4.496-0.624l9.158,9.158h-39.253v-8.533c0-3.399-1.511-6.038-4.02-7.434    l-15.606-15.606c-3.413-3.413-8.533-3.413-11.947,0s-3.413,8.533,0,11.947l14.507,14.507v5.12H81.213l-29.638-29.638    c0.395-1.436,0.624-2.939,0.624-4.496c0-9.387-7.68-17.067-17.067-17.067c-9.387,0-17.067,7.68-17.067,17.067    c0,9.387,7.68,17.067,17.067,17.067c1.557,0,3.06-0.229,4.496-0.624l17.691,17.691H32.812c-2.963-5.086-8.466-8.533-14.746-8.533    C8.68,239.933,1,247.613,1,257s7.68,17.067,17.067,17.067c6.28,0,11.782-3.447,14.746-8.533H57.32l-17.691,17.691    c-1.436-0.395-2.939-0.624-4.495-0.624c-9.387,0-17.067,7.68-17.067,17.067s7.68,17.067,17.067,17.067    c9.387,0,17.067-7.68,17.067-17.067c0-1.557-0.229-3.06-0.624-4.496l29.638-29.638H103.4v5.12L88.893,285.16    c-3.413,3.413-3.413,8.533,0,11.947c1.707,1.707,3.413,2.56,5.973,2.56c2.56,0,4.267-0.853,5.973-2.56l15.607-15.607    c2.509-1.395,4.02-4.034,4.02-7.434v-8.533h39.253l-9.158,9.158c-1.436-0.395-2.939-0.624-4.496-0.624    c-9.387,0-17.067,7.68-17.067,17.067s7.68,17.067,17.067,17.067c9.387,0,17.067-7.68,17.067-17.067    c0-1.557-0.229-3.06-0.624-4.496l21.104-21.104h22.917c1.32,7.779,4.409,14.972,8.837,21.153l-12.98,12.98h-30.72    c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h13.653l-26.453,26.453l-5.366-5.366    c-1.395-2.509-4.034-4.02-7.434-4.02H129c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533h13.653l4.267,4.267    l-12.8,12.8H91.563c-0.731-1.201-1.608-2.352-2.669-3.413c-6.827-6.827-17.067-6.827-23.893,0s-6.827,17.067,0,23.893    s17.067,6.827,23.893,0c1.062-1.062,1.938-2.212,2.669-3.413h25.491l-26.248,26.248c-5.627-1.627-11.802-0.144-16.419,4.472    c-6.827,6.827-6.827,17.067,0,23.893s17.067,6.827,23.893,0c4.616-4.616,6.099-10.792,4.472-16.419L129,396.947v24.986    c-1.515,0.808-2.955,1.862-4.267,3.174c-6.827,5.973-6.827,17.067,0,23.893s17.067,6.827,23.893,0s6.827-17.067,0-23.893    c-0.808-0.808-1.667-1.513-2.56-2.13V379.88l12.8-12.8l4.267,4.267V385c0,5.12,3.413,8.533,8.533,8.533S180.2,390.12,180.2,385    v-17.067c0-3.399-1.511-6.038-4.02-7.434l-5.366-5.366l26.453-26.453v13.653c0,5.12,3.413,8.533,8.533,8.533    c5.12,0,8.533-3.413,8.533-8.533v-30.72l12.98-12.98c6.182,4.428,13.374,7.517,21.153,8.837v22.917l-21.104,21.104    c-1.436-0.395-2.939-0.624-4.496-0.624c-9.387,0-17.067,7.68-17.067,17.067S213.48,385,222.867,385    c9.387,0,17.067-7.68,17.067-17.067c0-1.557-0.229-3.06-0.624-4.496l9.158-9.158v47.787h-8.532c-0.003,0-0.006,0-0.009,0    c-3.395,0.002-6.032,1.512-7.426,4.02l-15.607,15.606c-3.413,3.413-3.413,8.533,0,11.947c1.707,1.707,3.413,2.56,5.973,2.56    s4.267-0.853,5.973-2.56l14.507-14.507h5.12v13.653l-29.638,29.638c-1.436-0.395-2.939-0.624-4.495-0.624    c-9.387,0-17.067,7.68-17.067,17.067s7.68,17.067,17.067,17.067c9.387,0,17.067-7.68,17.067-17.067    c0-1.557-0.229-3.06-0.624-4.496l17.691-17.691v24.508c-5.086,2.963-8.533,8.466-8.533,14.746c0,9.387,7.68,17.067,17.067,17.067    s17.067-7.68,17.067-17.067c0-6.28-3.447-11.782-8.533-14.746V456.68l17.691,17.691c-0.395,1.436-0.624,2.939-0.624,4.496    c0,9.387,7.68,17.067,17.067,17.067s17.067-7.68,17.067-17.067s-7.68-17.067-17.067-17.067c-1.557,0-3.06,0.229-4.496,0.624    l-29.638-29.638v-13.653h5.12l14.507,14.507c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56    c3.413-3.413,3.413-8.533,0-11.947L281.5,406.087c-1.394-2.508-4.031-4.018-7.426-4.02c-0.003,0-0.006,0-0.009,0h-8.532V354.28    l9.158,9.158c-0.395,1.436-0.624,2.939-0.624,4.496c0,9.387,7.68,17.067,17.067,17.067s17.067-7.68,17.067-17.067    s-7.68-17.067-17.067-17.067c-1.557,0-3.06,0.229-4.496,0.624l-21.104-21.104V307.47c7.779-1.32,14.972-4.409,21.153-8.837    l12.98,12.98v30.72c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533V328.68l26.453,26.453l-5.367,5.367    c-2.509,1.395-4.02,4.034-4.02,7.433V385c0,5.12,3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533v-13.653l4.267-4.267    l12.8,12.8v41.574c-5.086,2.963-8.533,8.466-8.533,14.746c0,9.387,7.68,17.067,17.067,17.067s17.067-7.68,17.067-17.067    c0-6.28-3.447-11.782-8.533-14.746v-24.508l26.248,26.248c-1.627,5.627-0.144,11.802,4.472,16.419    c6.827,6.827,17.067,6.827,23.893,0s6.827-17.067,0-23.893c-4.616-4.616-10.792-6.099-16.419-4.472L396.947,385h24.637    c0.731,1.201,1.608,2.352,2.669,3.413c6.827,6.827,17.067,6.827,23.893,0s6.827-17.067,0-23.893s-17.067-6.827-23.893,0    c-1.062,1.062-1.938,2.212-2.669,3.413H379.88l-12.8-12.8l4.267-4.267H385c5.12,0,8.533-3.413,8.533-8.533    c0-5.12-3.413-8.533-8.533-8.533h-17.067c-3.399,0-6.038,1.511-7.433,4.02l-5.367,5.367l-26.453-26.453h13.653    c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-30.72l-12.98-12.98c4.428-6.182,7.517-13.374,8.837-21.153h22.917    l21.104,21.104c-0.395,1.436-0.624,2.939-0.624,4.496c0,9.387,7.68,17.067,17.067,17.067S385,300.52,385,291.133    s-7.68-17.067-17.067-17.067c-1.557,0-3.06,0.229-4.496,0.624l-9.158-9.158h39.253v8.533c0,3.399,1.511,6.038,4.02,7.433    l15.607,15.607c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947L410.6,270.653v-5.12    h22.187l29.638,29.638c-0.395,1.436-0.624,2.939-0.624,4.496c0,9.387,7.68,17.067,17.067,17.067s17.067-7.68,17.067-17.067    s-7.68-17.067-17.067-17.067c-1.557,0-3.06,0.229-4.496,0.624l-17.691-17.691h24.508c2.963,5.086,8.466,8.533,14.746,8.533    c9.387,0,17.067-7.68,17.067-17.067S505.32,239.933,495.933,239.933z M282.498,279.621c-0.563,0.354-1.104,0.772-1.604,1.273    s-0.919,1.041-1.273,1.604c-6.034,5.363-13.962,8.635-22.621,8.635s-16.586-3.273-22.621-8.635    c-0.354-0.563-0.772-1.104-1.273-1.604s-1.041-0.919-1.604-1.273c-5.363-6.034-8.635-13.962-8.635-22.621    c0-8.7,3.303-16.663,8.711-22.708c0.549-0.335,1.071-0.727,1.529-1.186c0.501-0.501,0.919-1.041,1.273-1.604    c6.034-5.363,13.962-8.635,22.621-8.635s16.586,3.273,22.621,8.635c0.354,0.563,0.772,1.104,1.273,1.604    c0.558,0.558,1.119,1.016,1.707,1.391c5.301,6.02,8.533,13.9,8.533,22.502C291.133,265.659,287.861,273.586,282.498,279.621z\"/>\n        </g>\n    </g>\n    </svg>");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnowFall.prototype, "style", {
        get: function () {
            return "\n        width: ".concat(this.width, "px;\n        height: ").concat(this.width, "px;\n        position: absolute;\n        left: ").concat(this.cordinate.left - 30, "px;\n        @keyframes rotate { \n            from { transform: rotate(0deg); }\n            to { transform: rotate(360deg); }\n        }\n        animation: rotate 1s linear infinite;\n    ");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SnowFall.prototype, "container", {
        get: function () {
            var elem = document.querySelector(".snow-fall-container");
            return elem;
        },
        enumerable: false,
        configurable: true
    });
    return SnowFall;
}());
export default SnowFall;
