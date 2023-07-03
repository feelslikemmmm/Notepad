import { BaseComponent } from '../../component.js';
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`<section class="video">
            <div class="video__player"><iframe class="video__iframe"></iframe></div>
            <h3 class="page-item__title video__title"></h3>
          </section>`);
        const iframe = this.element.querySelector('.video__iframe');
        iframe.src = url;
        iframe.src = this.convertToEmbeddedURL(url);
        const titleElement = this.element.querySelector('.video__title');
        titleElement.textContent = title;
    }
    convertToEmbeddedURL(url) {
        const splited = url.split('=');
        const videoId = splited[splited.length - 1];
        return `https://www.youtube.com/embed/${videoId}`;
    }
}
