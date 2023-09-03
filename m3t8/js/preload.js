const preloader = {
    overlay: document.createElement('div'),
    preloader: document.createElement('div'),

    create() {
        this.preloader.style.cssText = `
            width: 180px;
            height: 180px;
            background-image: url('image/preload.svg');
            background-repeat: no-repeat;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            animation: 3s rotating infinite linear;
        `;

        this.overlay.style.cssText = `
            width: 100%;
            height: 100vh;
            background-color: grey;
            position: fixed;
            z-index: 100;
            visibility: visible;
            top: 0;
            left: 0;
            text-align: center;
            justify-content: center;
            align-content: center;
            transition: 0.5s all;
        `;
        this.overlay.append(this.preloader);
        document.body.append(this.overlay);
    },

    show() {
        if (this.overlay.classList.contains('hide')) {
            this.overlay.classList.remove('hide');
        };
    },

    hide() {
        if (!this.overlay.classList.contains('hide')) {
            this.overlay.classList.add('hide');
        };
    }
};

export default preloader;

